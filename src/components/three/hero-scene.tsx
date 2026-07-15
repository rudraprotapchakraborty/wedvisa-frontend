"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import { cinematic } from "@/lib/cinematic-store";

/* ─── Custom shader: volumetric soft field ─── */
const fogVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fogFragment = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;

  // Simplex-ish noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float n = fbm(uv * 2.4 + uTime * 0.04);
    float n2 = fbm(uv * 3.5 - uTime * 0.03 + 10.0);
    float mask = smoothstep(0.15, 0.85, n * 0.65 + n2 * 0.35);
    float radial = 1.0 - length(uv - 0.5) * 1.35;
    radial = clamp(radial, 0.0, 1.0);
    vec3 col = mix(uColorA, uColorB, mask);
    float alpha = mask * radial * 0.42;
    gl_FragColor = vec4(col, alpha);
  }
`;

function VolumetricFog() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color("#f6f1ea") },
      uColorB: { value: new THREE.Color("#c4531d") },
    }),
    []
  );

  useFrame((state) => {
    if (mat.current) mat.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh position={[0.4, 0.1, -1.8]} scale={[5.5, 4.2, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={mat}
        vertexShader={fogVertex}
        fragmentShader={fogFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

/* ─── Animated architectural grid ─── */
function DepthGrid() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const p = cinematic.scroll.heroProgress;
    ref.current.position.z = -2.2 + p * 0.8;
    ref.current.rotation.x = -0.55 + Math.sin(t * 0.1) * 0.02;
    ref.current.position.y = -1.4 + p * 0.3;
  });

  const lines = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pts: number[] = [];
    const size = 8;
    const div = 16;
    const step = size / div;
    for (let i = 0; i <= div; i++) {
      const v = -size / 2 + i * step;
      pts.push(-size / 2, 0, v, size / 2, 0, v);
      pts.push(v, 0, -size / 2, v, 0, size / 2);
    }
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return geo;
  }, []);

  return (
    <group ref={ref} rotation={[-0.55, 0, 0]} position={[0.2, -1.4, -2.2]}>
      <lineSegments geometry={lines}>
        <lineBasicMaterial
          color="#c4531d"
          transparent
          opacity={0.12}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

/* ─── Glass architectural panels ─── */
function GlassPanels() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const p = cinematic.scroll.heroProgress;
    group.current.rotation.y = t * 0.04 + p * 0.4;
    group.current.position.y = Math.sin(t * 0.35) * 0.06;
  });

  const panels = useMemo(
    () =>
      [
        { pos: [1.6, 0.3, -0.4] as const, rot: [0.1, -0.5, 0.05] as const, s: [0.9, 1.4, 0.04] as const },
        { pos: [-1.5, -0.2, -0.6] as const, rot: [0.05, 0.6, -0.08] as const, s: [0.7, 1.1, 0.04] as const },
        { pos: [0.2, 1.1, -1.1] as const, rot: [0.3, 0.2, 0.1] as const, s: [1.1, 0.55, 0.03] as const },
      ] as const,
    []
  );

  return (
    <group ref={group}>
      {panels.map((panel, i) => (
        <Float key={i} speed={0.8 + i * 0.15} floatIntensity={0.2} rotationIntensity={0.08}>
          <mesh position={[...panel.pos]} rotation={[...panel.rot]}>
            <boxGeometry args={[...panel.s]} />
            <MeshTransmissionMaterial
              backside
              samples={3}
              resolution={192}
              thickness={0.4}
              roughness={0.22}
              chromaticAberration={0.06}
              anisotropy={0.15}
              distortion={0.12}
              distortionScale={0.25}
              temporalDistortion={0.04}
              ior={1.45}
              color="#f0e8dc"
              attenuationColor="#c4531d"
              attenuationDistance={0.9}
              transparent
              opacity={0.9}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ─── Interlocked ceremonial rings ─── */
function CeremonialRings() {
  const group = useRef<THREE.Group>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const ringC = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = cinematic.scroll.heroProgress;
    const { sx, sy } = cinematic.pointer;

    if (group.current) {
      group.current.rotation.y = t * 0.12 + p * 1.2 + sx * 0.25;
      group.current.rotation.x = Math.sin(t * 0.15) * 0.1 + sy * 0.15 + p * 0.2;
      group.current.position.x = 0.2 + sx * 0.18;
      group.current.position.y = 0.05 - p * 0.35 + sy * 0.1;
      group.current.scale.setScalar(1.05 + p * 0.15);
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.08;
    if (ringB.current) ringB.current.rotation.z = -t * 0.11;
    if (ringC.current) ringC.current.rotation.x = t * 0.06;
  });

  return (
    <group ref={group} position={[0.2, 0.05, 0]}>
      <mesh ref={ringA} rotation={[Math.PI / 2.35, 0.25, 0.1]} castShadow>
        <torusGeometry args={[1.2, 0.048, 64, 160]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          resolution={256}
          thickness={0.4}
          roughness={0.12}
          chromaticAberration={0.05}
          anisotropy={0.12}
          distortion={0.1}
          distortionScale={0.22}
          temporalDistortion={0.05}
          ior={1.42}
          color="#ebe2d6"
          attenuationColor="#c4531d"
          attenuationDistance={1.1}
        />
      </mesh>

      <mesh ref={ringB} rotation={[Math.PI / 1.65, -0.4, 0.55]} castShadow>
        <torusGeometry args={[0.95, 0.04, 64, 160]} />
        <meshStandardMaterial
          color="#c4531d"
          metalness={0.92}
          roughness={0.22}
          envMapIntensity={1.4}
        />
      </mesh>

      <mesh ref={ringC} rotation={[0.45, 0.95, 0.25]}>
        <torusGeometry args={[1.45, 0.01, 32, 128]} />
        <meshStandardMaterial
          color="#1c1613"
          metalness={0.7}
          roughness={0.35}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Distorted core orb — soft energy */}
      <mesh>
        <sphereGeometry args={[0.22, 48, 48]} />
        <MeshDistortMaterial
          color="#c4531d"
          emissive="#c4531d"
          emissiveIntensity={0.35}
          roughness={0.25}
          metalness={0.5}
          distort={0.25}
          speed={1.5}
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

/* ─── Floating holographic cards (product metaphor) ─── */
function HoloCards() {
  const group = useRef<THREE.Group>(null);
  const cards = useMemo(
    () => [
      { x: -1.9, y: 0.7, z: 0.2, ry: 0.35, delay: 0 },
      { x: 1.85, y: -0.4, z: 0.15, ry: -0.4, delay: 0.3 },
      { x: -1.3, y: -0.9, z: -0.3, ry: 0.2, delay: 0.6 },
    ],
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const p = cinematic.scroll.heroProgress;
    group.current.children.forEach((child, i) => {
      const c = cards[i];
      child.position.y = c.y + Math.sin(t * 0.7 + c.delay) * 0.08 - p * 0.4;
      child.rotation.y = c.ry + Math.sin(t * 0.3 + i) * 0.05;
      child.rotation.x = Math.sin(t * 0.4 + i) * 0.04;
    });
  });

  return (
    <group ref={group}>
      {cards.map((c, i) => (
        <mesh key={i} position={[c.x, c.y, c.z]} rotation={[0.1, c.ry, 0]}>
          <boxGeometry args={[0.55, 0.75, 0.02]} />
          <meshPhysicalMaterial
            color="#faf6f0"
            metalness={0.15}
            roughness={0.2}
            transmission={0.55}
            thickness={0.3}
            transparent
            opacity={0.85}
            clearcoat={1}
            clearcoatRoughness={0.15}
            envMapIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── GPU particle constellation ─── */
function Constellation({ count = 180 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      positions[i * 3 + 2] = r * Math.cos(phi) - 0.5;
      speeds[i] = 0.2 + Math.random() * 0.8;
    }
    return { positions, speeds };
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const p = cinematic.scroll.heroProgress;
    ref.current.rotation.y = t * 0.03 + p * 0.5;
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.08;
    const pos = ref.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(t * speeds[i] + i) * 0.0008;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.014}
        color="#c4531d"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ─── Scroll + pointer driven camera ─── */
function CinematicCamera() {
  const { camera } = useThree();
  const target = useMemo(() => new THREE.Vector3(0.15, 0.05, 0), []);

  useFrame(() => {
    const p = cinematic.scroll.heroProgress;
    const { sx, sy } = cinematic.pointer;
    const vel = Math.min(Math.abs(cinematic.scroll.velocity) / 1200, 1);

    // Dolly + orbit path
    const z = 4.4 - p * 1.4 - vel * 0.15;
    const x = Math.sin(p * Math.PI * 0.5) * 0.55 + sx * 0.35;
    const y = 0.15 + p * 0.35 + sy * 0.2;

    camera.position.x += (x - camera.position.x) * 0.06;
    camera.position.y += (y - camera.position.y) * 0.06;
    camera.position.z += (z - camera.position.z) * 0.06;

    target.x = 0.15 + sx * 0.12;
    target.y = 0.05 - p * 0.15 + sy * 0.08;
    camera.lookAt(target);

    // Subtle FOV breathe
    if ("fov" in camera) {
      const cam = camera as THREE.PerspectiveCamera;
      const desired = 36 + p * 6 + vel * 2;
      cam.fov += (desired - cam.fov) * 0.05;
      cam.updateProjectionMatrix();
    }
  });

  return null;
}

function SceneLights() {
  const key = useRef<THREE.DirectionalLight>(null);
  const rim = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = cinematic.scroll.heroProgress;
    if (key.current) {
      key.current.intensity = 1.05 + Math.sin(t * 0.4) * 0.08 + p * 0.2;
      key.current.position.x = 4 + Math.sin(t * 0.2) * 0.5;
    }
    if (rim.current) {
      rim.current.intensity = 0.55 + Math.sin(t * 0.6) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} color="#f7f1ea" />
      <directionalLight
        ref={key}
        position={[4.5, 6, 3.5]}
        intensity={1.1}
        color="#fff6ec"
      />
      <directionalLight position={[-4, 2, -2]} intensity={0.35} color="#c4531d" />
      <pointLight ref={rim} position={[0, -0.5, 2.5]} intensity={0.5} color="#f6f1ea" />
      <pointLight position={[1.5, 1.5, -1]} intensity={0.4} color="#c4531d" />
      <spotLight
        position={[0, 4, 2]}
        angle={0.45}
        penumbra={0.7}
        intensity={0.6}
        color="#ffe8d4"
        castShadow={false}
      />
    </>
  );
}

function SceneContent() {
  return (
    <>
      <CinematicCamera />
      <SceneLights />
      <VolumetricFog />
      <DepthGrid />
      <CeremonialRings />
      <GlassPanels />
      <HoloCards />
      <Constellation count={160} />
      <Sparkles
        count={40}
        scale={[5, 3.5, 4]}
        size={1.2}
        speed={0.25}
        opacity={0.35}
        color="#c4531d"
      />
      <Environment preset="city" environmentIntensity={0.5} />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="webgl-canvas absolute inset-0 h-full w-full" aria-hidden>
      <Canvas
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        camera={{ position: [0, 0.15, 4.4], fov: 36, near: 0.1, far: 60 }}
        style={{ background: "transparent" }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

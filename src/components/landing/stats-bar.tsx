"use client";

export function StatsBar() {
  return (
    <section className="w-full bg-[#faf5ea] border-y border-[#dfd2c4] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          
          {/* Column 1 */}
          <div className="flex-1 flex flex-col items-center text-center py-4 md:py-0">
            <h3 className="font-serif text-3.5xl md:text-[40px] font-medium leading-none text-[#000000] tracking-tight">
              6 <span className="text-[#e85a23]">free</span>
            </h3>
            <p className="mt-3 text-[13px] md:text-sm text-[#544436] font-normal tracking-wide">
              Planning tools, no sign-up
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-[#dfd2c4]" />

          {/* Column 2 */}
          <div className="flex-1 flex flex-col items-center text-center py-4 md:py-0">
            <h3 className="font-serif text-3.5xl md:text-[40px] font-medium leading-none text-[#000000] tracking-tight">
              Every <span className="text-[#e85a23]">event</span>
            </h3>
            <p className="mt-3 text-[13px] md:text-sm text-[#544436] font-normal tracking-wide">
              One account, multiple celebrations
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-[#dfd2c4]" />

          {/* Column 3 */}
          <div className="flex-1 flex flex-col items-center text-center py-4 md:py-0">
            <h3 className="font-serif text-3.5xl md:text-[40px] font-medium leading-none text-[#000000] tracking-tight">
              UK <span className="text-[#e85a23]">built</span>
            </h3>
            <p className="mt-3 text-[13px] md:text-sm text-[#544436] font-normal tracking-wide">
              Real UK costs, suppliers & guidance
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

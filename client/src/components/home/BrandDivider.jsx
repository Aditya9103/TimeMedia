import React from 'react';

const BrandDivider = () => {
    return (
        <div className="w-full flex items-center justify-center my-8 md:my-12 px-4 text-center">
            {/* Left Divider Line */}
            <div className="hidden md:block flex-1 h-[2px] bg-gray-200"></div>

            {/* Center Text */}
            <span className="mx-0 md:mx-8 text-[11px] min-[375px]:text-xs sm:text-sm md:text-base font-bold tracking-wide md:tracking-widest text-gray-400 uppercase leading-relaxed">
                Prime Time Helps More Then 2K<br className="md:hidden" /> Companies & Individuals Grow
            </span>

            {/* Right Divider Line */}
            <div className="hidden md:block flex-1 h-[2px] bg-gray-200"></div>
        </div>
    );
};

export default BrandDivider;

import React from 'react';

const BrandDivider = () => {
    return (
        <div className="w-full flex items-center justify-between my-8 px-4">
            {/* Left Divider Line */}
            <div className="flex-1 h-px bg-gray-300"></div>

            {/* Center Text */}
            <span className="mx-6 text-sm font-semibold tracking-wider text-gray-500 whitespace-nowrap uppercase">
                Prime Time Helps 2K+ Clients To Grow Brand Value
            </span>

            {/* Right Divider Line */}
            <div className="flex-1 h-px bg-gray-300"></div>
        </div>
    );
};

export default BrandDivider;

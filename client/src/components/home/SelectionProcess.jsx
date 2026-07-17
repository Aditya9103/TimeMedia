import React from 'react';
import { StaggerContainer, StaggerItem } from '../animations/StaggerFadeIn';

const SelectionProcess = () => {
  const steps = [
    "Nomination",
    "Secondary Research <Survey> Primary Research",
    "Preparing Report",
    "Sharing Final outcome with Panel Member",
    "Final Awardee List"
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50 text-center">
      <div>

        {/* Header */}
        <h4 className="text-sky-700 font-bold uppercase tracking-widest text-sm mb-4">How To Work</h4>
        <h2 className="text-3xl md:text-5xl font-black text-black mb-4">Selection Process</h2>
        <p className="text-gray-600 mb-10 md:mb-16 text-base md:text-lg">The Process Step includes</p>

        {/* Steps Diagram */}
        <div className="w-full mt-8 md:mt-12 max-w-5xl mx-auto px-4">
          <StaggerContainer className="flex flex-col md:flex-row justify-between relative gap-12 md:gap-0">
            {/* Global Horizontal Line (Desktop only) */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-black z-0"></div>

            {steps.map((step, index) => (
              <StaggerItem key={index} className="flex-1 flex flex-col items-center relative md:pt-6">
                
                {/* Mobile Horizontal Line (Mobile only) */}
                <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-[300px] h-[1px] bg-black z-0"></div>

                {/* Down Arrow (attached to the line) */}
                <div className="absolute top-0 md:top-0 left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-gray-800 z-10"></div>

                {/* Text */}
                <h3 className="font-bold text-xl md:text-lg text-black mt-8 md:mt-4 whitespace-pre-line leading-snug max-w-[250px] md:max-w-[180px]">
                  {step}
                </h3>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};

export default SelectionProcess;

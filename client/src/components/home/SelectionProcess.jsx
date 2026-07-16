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
    <section className="py-20 bg-gray-50 text-center">
      <div>

        {/* Header */}
        <h4 className="text-sky-700 font-bold uppercase tracking-widest text-sm mb-4">How To Work</h4>
        <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Selection Process</h2>
        <p className="text-gray-600 mb-16 text-lg">The Process Step includes</p>

        {/* Steps Diagram */}
        <div className="relative mt-8 max-w-5xl mx-auto">
          {/* Horizontal Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-black"></div>

          <StaggerContainer className="flex justify-between relative pt-6">
            {steps.map((step, index) => (
              <StaggerItem key={index} className="flex-1 flex flex-col items-center px-2">
                {/* Down Arrow attached to the line */}
                <div className="absolute top-0 -mt-[1px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-gray-800"></div>

                {/* Text */}
                <h3 className="font-bold text-base md:text-lg text-black mt-4 whitespace-pre-line leading-snug max-w-[180px]">
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

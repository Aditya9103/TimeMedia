import React from 'react';
import { StaggerContainer, StaggerItem } from '../animations/StaggerFadeIn';

const StatsSection = () => {
  const stats = [
    { number: "13+", line1: "Years", line2: "Experience" },
    { number: "2k+", line1: "Event", line2: "Host" },
    { number: "100+", line1: "Award", line2: "Host" },
    { number: "9k+", line1: "Happy", line2: "Customer" }
  ];

  return (
    <section className="py-10 md:py-16 bg-white border-y border-gray-100">
      <div>
        <StaggerContainer className="grid grid-cols-2 md:flex md:flex-row justify-between items-center gap-8 md:gap-4 px-4">
          {stats.map((stat, index) => (
            <StaggerItem key={index} className="flex flex-col md:flex-row items-center md:items-center justify-center gap-2 md:gap-4 text-center md:text-left">
              {/* Outline Number */}
              <div 
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter"
                style={{ 
                  WebkitTextStroke: '1px black', 
                  color: 'transparent' 
                }}
              >
                {stat.number}
              </div>
              {/* Stacked Text */}
              <div className="flex flex-col text-black font-semibold text-lg leading-tight">
                <span>{stat.line1}</span>
                <span>{stat.line2}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default StatsSection;

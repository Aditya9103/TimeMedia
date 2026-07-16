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
    <section className="py-16 bg-white border-y border-gray-100">
      <div>
        <StaggerContainer className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <StaggerItem key={index} className="flex items-center gap-4">
              {/* Outline Number */}
              <div 
                className="text-6xl md:text-7xl font-black tracking-tighter"
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

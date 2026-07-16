import React from 'react';
import { iconMap } from '../../data/servicesData';
import { StaggerContainer, StaggerItem } from '../animations/StaggerFadeIn';

const ServiceSectors = ({ data }) => {
  if (!data || !data.cards || data.cards.length === 0) return null;

  return (
    <div className="py-20 bg-slate-50">
      <StaggerContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          {data.title}
        </h2>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon];

            return (
              <StaggerItem key={index} className="h-full">
                <div
                  className="bg-white rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg border-2 border-[#15b7b9] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 h-full"
                >
                  <div className="flex items-center justify-center text-[#15b7b9] mb-4">
                    {IconComponent ? <IconComponent size={40} strokeWidth={1.5} /> : <div className="w-8 h-8 bg-cyan-200 rounded-full" />}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {card.subtitle}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </StaggerContainer>
    </div>
  );
};

export default ServiceSectors;

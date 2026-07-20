import React from 'react';
import { Link } from 'react-router-dom';
import { advertisingServicesData } from '../../data/advertisingServicesData';

const AdvertisingServicesMarquee = () => {
  return (
    <section className="bg-[#e1e5eb] overflow-hidden py-5 border-y border-[#1E293B]">
      <div className="flex overflow-hidden group py-2">
        <div 
          className="animate-marquee flex items-center w-max group-hover:[animation-play-state:paused]"
          style={{ animationDuration: '50s' }}
        >
          {[...advertisingServicesData, ...advertisingServicesData, ...advertisingServicesData, ...advertisingServicesData].map((service, index) => (
            <div key={index} className="px-3 md:px-4 flex-shrink-0">
              <Link
                to={`/advertising-services/${service.id}`}
                className="block px-6 py-3 bg-[#1E293B] text-white text-sm md:text-base font-bold rounded-lg border border-[#334155] hover:bg-[#334155] hover:border-sky-500 transition-all whitespace-nowrap shadow-sm hover:shadow-md"
              >
                {service.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisingServicesMarquee;

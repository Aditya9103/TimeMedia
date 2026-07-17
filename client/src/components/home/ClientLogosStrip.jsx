import React from 'react';

const ClientLogosStrip = () => {
  const logos = [
    { name: 'Tata Steel Hospital', url: '/clientlogo/tata-steel-hospital.jpeg' },
    { name: 'Kale Ayurvedic', url: '/clientlogo/kale-ayurvedic.jpeg' },
    { name: 'MIV Therapeutics', url: '/clientlogo/miv-therapeutics.png' },
    { name: 'Bombay Hospital', url: '/clientlogo/bombay-hospital.png' },
    { name: 'Clove Dental', url: '/clientlogo/clove-dental.png' },
    { name: 'Heart Hospital', url: '/clientlogo/heart-hospital.png' },
    { name: 'LA Transformation', url: '/clientlogo/la-transformation.webp' },
    { name: 'Omega Plus Hospital', url: '/clientlogo/omega-plus-hospital.png' },
    { name: 'SRCC Childrens Hospital', url: '/clientlogo/srcc-childrens-hospital.svg' },
    { name: 'Sakhiya Skin Clinic', url: '/clientlogo/sakhiya-skin-clinic.svg' },
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <style>
        {`
          @keyframes scroll-infinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            animation: scroll-infinite 30s linear infinite;
          }
        `}
      </style>
      <div className="flex overflow-hidden group py-4 select-none">
        {/* Track 1 */}
        <div className="animate-scroll flex items-center flex-shrink-0 w-max group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`orig-${index}`} className="px-8 flex-shrink-0">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 cursor-pointer hover:scale-105"
              />
            </div>
          ))}
        </div>
        {/* Track 2 */}
        <div className="animate-scroll flex items-center flex-shrink-0 w-max group-hover:[animation-play-state:paused]" aria-hidden="true">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`dup-${index}`} className="px-8 flex-shrink-0">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 cursor-pointer hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosStrip;

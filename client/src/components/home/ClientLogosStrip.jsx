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
      {/* Container masking the overflow */}
      <div className="flex overflow-hidden group py-4 select-none">

        {/* Track 1: Original Set */}
        <div className="animate-marquee [animation-duration:20s] flex items-center min-w-full shrink-0 justify-around gap-16 group-hover:[animation-play-state:paused]">
          {logos.map((logo, index) => (
            <div key={`orig-${index}`} className="flex-shrink-0">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-16 md:h-20 object-contain transition-transform duration-300 cursor-pointer hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Track 2: Exact Duplicate (creates the seamless illusion) */}
        <div className="animate-marquee [animation-duration:20s] flex items-center min-w-full shrink-0 justify-around gap-16 group-hover:[animation-play-state:paused]" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="flex-shrink-0">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-16 md:h-20 object-contain transition-transform duration-300 cursor-pointer hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientLogosStrip;

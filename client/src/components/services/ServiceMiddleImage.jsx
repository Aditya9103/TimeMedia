import React from 'react';

const ServiceMiddleImage = ({ imageSrc }) => {
  if (!imageSrc) return null;

  return (
    <div className="w-full bg-slate-50 py-12">
      <div>
        <div className="w-full aspect-[21/9] md:aspect-[21/7] rounded-2xl overflow-hidden shadow-2xl relative bg-slate-200">
          <img 
            src={imageSrc} 
            alt="Service Feature" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceMiddleImage;

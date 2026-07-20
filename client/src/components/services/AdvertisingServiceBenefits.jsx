import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AdvertisingServiceBenefits = ({ data }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-4">Key Benefits of {data.title}</h2>
          <div className="w-16 h-1 bg-sky-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.content.benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-8 h-8 text-sky-700 mb-4" />
              <p className="text-gray-700 leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisingServiceBenefits;

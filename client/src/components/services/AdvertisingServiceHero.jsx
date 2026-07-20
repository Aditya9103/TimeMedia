import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AdvertisingServiceHero = ({ data }) => {
  return (
    <section className="bg-white border-b border-gray-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-[#15b7b9] hover:text-sky-700 font-medium text-sm mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-sky-700 font-bold uppercase tracking-widest text-sm mb-4">{data.title}</h4>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6 leading-tight">
              {data.content.headline}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {data.content.fullDescription}
            </p>
          </div>
          <div className="relative">
            <div className="w-full  rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400 p-8 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><span class="font-medium text-lg">Image coming soon</span></div>`;
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-dots-pattern opacity-50 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-dots-pattern opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingServiceHero;

import React from 'react';
import { StaggerContainer, StaggerItem } from '../animations/StaggerFadeIn';

const AboutSummary = () => {
  return (
    <section className="py-20 bg-white">
      <StaggerContainer className="flex flex-col md:flex-row items-center gap-12">

        {/* Left Side: Image */}
        <StaggerItem className="w-full md:w-1/2 relative min-h-[400px] flex items-center justify-center p-4">
          <div className="relative w-full max-w-[500px] group">
            <img 
              src="/home/about1.png" 
              alt="About TimeMedia" 
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 relative z-10 drop-shadow-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/800x1000/transparent/333333?text=About+TimeMedia";
              }}
            />
          </div>
          
          {/* Decorative Dot Pattern */}
          <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-40 h-40 bg-[radial-gradient(circle_at_center,_#15b7b9_2px,_transparent_2px)] [background-size:16px_16px] -z-10 rounded-full opacity-60"></div>
        </StaggerItem>

        {/* Right Side: Text */}
        <StaggerItem className="w-full md:w-1/2">
          <h4 className="text-sky-700 font-bold uppercase tracking-widest text-sm mb-4">About Company</h4>
          <h2 className="text-3xl md:text-4xl font-black text-black  mb-6">
            Providing brilliant ideas For your business
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Prime Time Research Media Private Limited is a premier insight driven media and marketing services company that is widely recognized for pioneering and innovative work for its clients. We are a one-stop solution for affordable and turn-key marketing and business services for domestic, multinational, government, non-government, corporate, established and new start-up businesses and services. We help in boosting your businesses and services and taking it to its zenith through bespoke brand management and strategy, business advisory, market research, marketing solutions, strategic public relations, media management, reputation management and design and communication solutions. Our strategic goal is to provide the best for our clients by amalgamating our expertise, exceptional thinking, innovative solutions and cutting-edge research methodology along with in-depth and creative expressions.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition shadow-md">
            Discover More
          </button>
        </StaggerItem>

      </StaggerContainer>
    </section>
  );
};

export default AboutSummary;

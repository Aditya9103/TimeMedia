import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
const RelatedServices = ({ relatedIds }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Map IDs to actual service objects
  const services = (relatedIds || []).map(id => servicesData[id]).filter(Boolean);
  const scrollItems = [...services, ...services, ...services, ...services]; // Duplicate for infinite effect

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; // card width + gap approx
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / 350);
      setActiveIndex(newIndex % services.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we've reached the end, scroll back to the start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 3500); // Auto scroll every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  if (!relatedIds || relatedIds.length === 0) return null;

  return (
    <div className="py-20 bg-white overflow-hidden">
      <div>
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-cyan-500">
            Related Services
          </h2>
        </div>

        <div className="relative w-full group mt-4">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-6 md:left-10 top-[40%] -translate-y-1/2 z-20 p-2 text-white hover:scale-110 transition-transform drop-shadow-lg"
        >
          <ChevronLeft size={36} strokeWidth={2} />
        </button>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-6 px-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {scrollItems.map((service, index) => (
            <Link
              key={`${service.id}-${index}`}
              to={`/services/${service.id}`}
              className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] block group/card snap-center"
            >
              <div className="rounded-[12px] overflow-hidden border-[3px] border-[#15b7b9] relative aspect-[5/3] bg-slate-900 transition-all hover:opacity-95">
                {/* Background Image / Placeholder */}
                {service.hero.image ? (
                  <img
                    src={service.hero.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-900 to-cyan-800" />
                )}
              </div>
              
              {/* Title below image */}
              <h3 className="mt-4 text-center text-sm md:text-base text-slate-800 group-hover/card:text-[#15b7b9] transition-colors">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-6 md:right-10 top-[40%] -translate-y-1/2 z-20 p-2 text-white hover:scale-110 transition-transform drop-shadow-lg"
        >
          <ChevronRight size={36} strokeWidth={2} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-10">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollRef.current) {
                // Scroll to specific index
                scrollRef.current.scrollTo({ left: index * 350, behavior: 'smooth' });
                setActiveIndex(index);
              }
            }}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index 
                ? 'w-6 h-2 bg-[#15b7b9]' 
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
};

export default RelatedServices;

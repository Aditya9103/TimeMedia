import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

const RelatedAwards = ({ relatedEvents, categorySlug }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Duplicate for infinite effect (like RelatedServices)
  const scrollItems = relatedEvents ? [...relatedEvents, ...relatedEvents, ...relatedEvents, ...relatedEvents] : [];

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
    if (scrollRef.current && relatedEvents?.length > 0) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / 350);
      setActiveIndex(newIndex % relatedEvents.length);
    }
  };

  useEffect(() => {
    if (!relatedEvents || relatedEvents.length === 0) return;
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
  }, [relatedEvents]);

  if (!relatedEvents || relatedEvents.length === 0) return null;

  return (
    <div className="py-16 bg-white overflow-hidden rounded-3xl mt-10">
      <div>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-cyan-500 font-display">
            Related Awards
          </h2>
        </div>

        <div className="relative w-full group mt-4">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-4 md:left-8 top-[40%] -translate-y-1/2 z-20 p-2 text-white hover:scale-110 transition-transform drop-shadow-lg focus:outline-none"
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
            {scrollItems.map((related, index) => (
              <Link
                key={`${related._id}-${index}`}
                to={`/awards/${categorySlug}/${related.slug}`}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] block group/card snap-center"
              >
                <div className="rounded-[12px] overflow-hidden border-[3px] border-[#15b7b9] relative aspect-[5/3] bg-slate-900 transition-all hover:opacity-95">
                  {related.heroImage?.url ? (
                    <>
                      {/* Blurred Background to fill empty space */}
                      <img
                        src={related.heroImage.url}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-50"
                      />
                      {/* Main Uncropped Image */}
                      <img
                        src={related.heroImage.url}
                        alt={related.title}
                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-900 to-cyan-800 flex items-center justify-center">
                      <Calendar size={48} className="text-white/50" />
                    </div>
                  )}
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest text-slate-800 shadow-sm">
                    {related.year || new Date().getFullYear()}
                  </div>
                </div>
                
                {/* Title below image */}
                <div className="mt-4 text-center">
                  <h3 className="text-sm md:text-base font-bold text-slate-800 group-hover/card:text-[#15b7b9] transition-colors line-clamp-2 px-2">
                    {related.title}
                  </h3>
                  {related.venue && (
                    <p className="text-slate-500 text-xs md:text-sm flex items-center justify-center gap-1 mt-2">
                      <MapPin size={14} className="text-[#15b7b9]" /> {related.venue}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-4 md:right-8 top-[40%] -translate-y-1/2 z-20 p-2 text-white hover:scale-110 transition-transform drop-shadow-lg focus:outline-none"
          >
            <ChevronRight size={36} strokeWidth={2} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {relatedEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
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

export default RelatedAwards;

import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const UpcomingEventsSection = () => {
  const events = [
    {
      title: "International Awards",
      image: "https://placehold.co/600x400/334155/ffffff?text=International+Awards",
      slug: "international-awards"
    },
    {
      title: "Global Education Awards",
      image: "https://placehold.co/600x400/334155/ffffff?text=Global+Education+Awards",
      slug: "global-education-awards"
    },
    {
      title: "Global Healthcare Awards",
      image: "https://placehold.co/600x400/334155/ffffff?text=Global+Healthcare+Awards",
      slug: "global-healthcare-awards"
    },
    {
      title: "Digital Bharat Summit",
      image: "https://placehold.co/600x400/334155/ffffff?text=Digital+Bharat+Summit",
      slug: "digital-bharat-summit"
    },
    {
      title: "Global Icon Awards",
      image: "https://placehold.co/600x400/334155/ffffff?text=Global+Icon+Awards",
      slug: "global-icon-awards"
    },
    {
      title: "India Excellence Awards",
      image: "https://placehold.co/600x400/334155/ffffff?text=India+Excellence+Awards",
      slug: "india-excellence-awards"
    },
    {
      title: "National Dental Awards",
      image: "https://placehold.co/600x400/334155/ffffff?text=National+Dental+Awards",
      slug: "national-dental-awards"
    }
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Duplicate for infinite effect
  const scrollItems = [...events, ...events, ...events, ...events];

  const getScrollAmount = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const card = scrollRef.current.firstElementChild;
      // Get gap. Fallback to 32px (gap-8) if not computed
      const gap = parseInt(window.getComputedStyle(scrollRef.current).gap) || 32;
      return card.offsetWidth + gap;
    }
    return 480;
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = getScrollAmount();
      
      if (direction === 'right') {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft <= 10) {
          // Approximate the end position
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const scrollAmount = getScrollAmount();
      const newIndex = Math.round(scrollPosition / scrollAmount);
      setActiveIndex(newIndex % events.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-white relative">
      <div className="mb-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-black">
            Upcoming Events
          </h2>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto group mt-4">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 md:left-8 top-[35%] -translate-y-1/2 z-20 p-2 text-white hover:scale-110 transition-transform drop-shadow-lg focus:outline-none"
        >
          <ChevronLeft size={36} strokeWidth={2} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 px-4 py-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {scrollItems.map((event, index) => (
            <div
              key={`${event.slug}-${index}`}
              className="flex-shrink-0 w-[calc(100vw-3rem)] md:w-[calc(50vw-2.5rem)] lg:w-[calc(33.333vw-2.5rem)] xl:w-[390px] flex flex-col cursor-pointer group/card snap-center"
            >
              {/* Event Image Placeholder */}
              <div className="w-full overflow-hidden mb-6 shadow-md bg-gray-100 rounded-lg">
                <Link to={`/events/${event.slug}`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[280px] object-cover transform transition-transform duration-500 group-hover/card:scale-105"
                  />
                </Link>
              </div>

              {/* Event Title */}
              <h3 className="text-xl md:text-2xl font-bold text-center text-black transition-colors group-hover/card:text-[#15b7b9]">
                <Link to={`/events/${event.slug}`}>
                  {event.title}
                </Link>
              </h3>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 md:right-8 top-[35%] -translate-y-1/2 z-20 p-2 text-white hover:scale-110 transition-transform drop-shadow-lg focus:outline-none"
        >
          <ChevronRight size={36} strokeWidth={2} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-10">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollRef.current) {
                const scrollAmount = getScrollAmount();
                scrollRef.current.scrollTo({ left: index * scrollAmount, behavior: 'smooth' });
                setActiveIndex(index);
              }
            }}
            className={`transition-all duration-300 rounded-full ${activeIndex === index
              ? 'w-6 h-2 bg-[#15b7b9]'
              : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default UpcomingEventsSection;

import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ChiefGuestsCarousel = () => {
  const originalGuests = [
    {
      name: 'Shri Virendra Sharma',
      designation: '',
      image: '/guest/guest1vs.jpeg'
    },
    {
      name: 'Shri Sunil Gavaskar',
      designation: 'Indian cricket commentator and former cricketer',
      image: '/guest/guest2sg.jpeg'
    },
    {
      name: 'Shri Ashwini Kumar Choubey',
      designation: "Hon'ble Minister of State for Health and Family Welfare",
      image: '/guest/guest3ac.jpeg'
    },
    {
      name: 'Dr Yogendra Shastri',
      designation: '',
      image: '/guest/guest4ys.jpeg'
    },
    {
      name: 'Shri G.V.L Narsimha Rao',
      designation: 'National Spokes Person, Bharatiya Janta Party (BJP)',
      image: '/guest/guest5nr.jpeg'
    },
    {
      name: "Mr Brad Hogg",
      designation: "An Australian former cricketer and commentator",
      image: '/guest/guest6bh.jpeg'
    },
    {
      name: "Dr. Najma A. Heptulla",
      designation: "Hon'ble Governer, Manipur; Chancellor, Jamia Millia Islamia",
      image: '/guest/guest7nh.jpeg'
    },
    {
      name: "Shri Anand Kumar",
      designation: "Founder of Super 30",
      image: '/guest/guest8ak.jpeg'
    },
    {
      name: "Shri Amar Singh",
      designation: "Hon'ble Member of Parliament (Rajya Sabha)",
      image: '/guest/guest9as.jpeg'
    }
  ];

  // Duplicate the array multiple times to create an infinite scroll effect
  const guests = [...originalGuests, ...originalGuests, ...originalGuests, ...originalGuests, ...originalGuests];

  const scrollRef = useRef(null);

  // Auto scroll interval
  useEffect(() => {
    const timer = setInterval(() => {
      scroll('right');
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Dynamically calculate scroll amount based on the first child's width + gap (32px)
      const firstCard = scrollRef.current.firstElementChild;
      const scrollAmount = firstCard ? firstCard.offsetWidth + 32 : 300;

      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // If we scroll too far right, seamlessly jump back to the second duplicate set
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      scrollRef.current.scrollTo({ left: scrollWidth / 5, behavior: 'instant' });
    }
    // If we scroll too far left, seamlessly jump to the fourth duplicate set
    if (scrollLeft <= 0) {
      scrollRef.current.scrollTo({ left: (scrollWidth / 5) * 3, behavior: 'instant' });
    }
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden group">
      <div className="relative">
        <h2 className="text-center align-center justify-center text-3xl md:text-4xl font-black text-black mb-12">
          Previous Chief Guests
        </h2>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-sky-700 hover:text-white z-10 transition-colors hidden md:block opacity-0 group-hover:opacity-100"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-sky-700 hover:text-white z-10 transition-colors hidden md:block opacity-0 group-hover:opacity-100"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-4 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {guests.map((guest, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center snap-center text-center cursor-pointer group/card w-full sm:w-[calc((100%-32px)/2)] lg:w-[calc((100%-64px)/3)]"
            >
              <div className="relative w-52 h-52 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden shadow-2xl transition-all duration-500 group-hover/card:shadow-cyan-500/30 group-hover/card:-translate-y-2 max-w-full mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="w-full h-full object-cover transform scale-[1.35] group-hover/card:scale-[1.45] transition-transform duration-700 relative z-0"
                />
              </div>
              <h3 className="font-bold text-xl text-slate-800 mb-2 group-hover/card:text-[#15b7b9] transition-colors">{guest.name}</h3>
              <p className="text-sm font-medium text-slate-500 px-4 max-w-sm mx-auto">{guest.designation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS to hide scrollbar for webkit browsers */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default ChiefGuestsCarousel;

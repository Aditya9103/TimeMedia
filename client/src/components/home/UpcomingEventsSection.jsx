import React from 'react';
import { Link } from 'react-router-dom';

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

      {/* Infinite Looping Slider Container */}
      <div className="overflow-hidden group flex">
        <div className="animate-marquee flex items-center w-max gap-8 group-hover:[animation-play-state:paused] px-4">
          {[...events, ...events, ...events].map((event, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[350px] lg:w-[450px] flex flex-col cursor-pointer group/card"
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
              <h3 className="text-xl md:text-2xl font-bold text-center text-black transition-colors group-hover/card:text-sky-700">
                <Link to={`/events/${event.slug}`}>
                  {event.title}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;

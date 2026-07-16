import React from 'react';
import { Link } from 'react-router-dom';

const ServicesMarquee = () => {
  const services = [
    { title: "Market Research", slug: "market-research" },
    { title: "Ratings & Accreditations", slug: "ratings-accreditations" },
    { title: "Digital Marketing", slug: "digital-marketing" },
    { title: "Brand & Reputation Management", slug: "brand-reputation-management" },
    { title: "Business Consultancy Services", slug: "business-consultancy" },
    { title: "Public Relation Management", slug: "public-relation-management" },
    { title: "Social Media Management", slug: "social-media-management" },
    { title: "Web Development", slug: "web-development" },
    { title: "Calibration", slug: "calibration" }
  ];

  return (
    <section className="bg-white overflow-hidden py-10 border-y border-gray-300">
      <div className="flex overflow-hidden group">
        <div className="animate-marquee flex items-center w-max group-hover:[animation-play-state:paused]">
          {[...services, ...services, ...services, ...services].map((service, index) => (
            <div key={index} className="px-12 flex-shrink-0">
              <Link
                to={`/services/${service.slug}`}
                className="text-lg md:text-xl font-bold text-black hover:text-sky-700 transition-colors whitespace-nowrap"
              >
                {service.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;

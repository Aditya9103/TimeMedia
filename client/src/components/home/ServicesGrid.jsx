import React from 'react';
import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem } from '../animations/StaggerFadeIn';

const ServicesGrid = () => {
  const services = [
    {
      title: "Market Research",
      slug: "market-research",
      description: "Market research is \"the function that links the consumers, customers, and public to the marketer through information — information used to identify...",
    },
    {
      title: "Ratings & Accreditations",
      slug: "ratings-accreditations",
      description: "Prime time provides you best services for Ratings & Accreditations. Prime Time is devoted to quality advancement in the healthcare, education...",
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      description: "In the digital age, a strong online presence is crucial. We offer comprehensive digital marketing strategies designed to increase visibility and engagement.",
    },
    {
      title: "Brand & Reputation Management",
      slug: "brand-reputation-management",
      description: "Protect and enhance your brand's image. We help you build trust and credibility through strategic PR and reputation management services.",
    },
    {
      title: "Business Consultancy Services",
      slug: "business-consultancy",
      description: "Prime Time provides best Business Consultancy Services in India. Prime Time, along with its subsidiaries is a leading provider of advisory..."
    },
    {
      title: "Public Relation Management",
      slug: "public-relation-management",
      description: "Public Relation Management today’s contemporary market scenario there is cut-throat competition and therefore it is essential to have an edge over your competitors..."
    },
    {
      title: "Social Media Management",
      slug: "social-media-management",
      description: "Prime Time Media helps brands with different aspects of their social media management strategy by deploying result-driven services around social..."
    },
    {
      title: "Web Development",
      slug: "web-development",
      description: "Prime Time Media provide expert web application development and web design services to our clients. Appnovation offers a variety of website design"
    },
    {
      title: "Calibration",
      slug: "calibration",
      description: "In today’s quality conscious world, agencies set strict requirements for the calibration of test equipment. Our professional Calibration Technicians are able to calibrate..."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div>

        {/* Header */}
        <div className="mb-12">
          <h4 className="text-sky-700 font-bold uppercase tracking-widest text-sm mb-4">What We Offer</h4>
          <h2 className="text-3xl md:text-4xl font-black text-black mb-10">Provide Best Services</h2>
        </div>

        {/* Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-sky-700 mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-8 min-h-[80px]">
                {service.description}
              </p>
              <Link to={`/services/${service.slug}`} className="inline-block bg-cyan-100 hover:bg-cyan-200 text-gray-800 font-medium py-2 px-6 rounded transition-colors">
                Read More
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default ServicesGrid;

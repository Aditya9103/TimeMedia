import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import ChiefGuestsGrid from '../components/patrons/ChiefGuestsGrid';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';
import SEO from '../components/common/SEO';

const OurPatronsPage = () => {
  return (
    <main className="flex flex-col w-full pt-10">
      <SEO 
        title="Our Patrons & Chief Guests"
        description="View the distinguished personalities, industry leaders, and chief guests who support Prime Time Research Media's pursuit of excellence."
      />
      <PageContainer className="py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Patrons & Chief Guests</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are honored to have the support and presence of these distinguished personalities and industry leaders who have continually encouraged our pursuit of excellence.
          </p>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-8"></div>
        </div>

        <ChiefGuestsGrid />
        <UpcomingEventsSection />

      </PageContainer>
    </main>
  );
};

export default OurPatronsPage;

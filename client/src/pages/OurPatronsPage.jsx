import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import ChiefGuestsGrid from '../components/patrons/ChiefGuestsGrid';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';

const OurPatronsPage = () => {
  return (
    <div className="flex flex-col w-full  pt-10">
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
    </div>
  );
};

export default OurPatronsPage;

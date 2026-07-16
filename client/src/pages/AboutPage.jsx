import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import AboutSummary from '../components/home/AboutSummary';
import StatsSection from '../components/home/StatsSection';
import ServicesMarquee from '../components/home/ServicesMarquee';
import ChiefGuestsCarousel from '../components/home/ChiefGuestsCarousel';
import BrandDivider from '../components/home/BrandDivider';
import TestimonialSection from '../components/home/TestimonialSection';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';
import SEO from '../components/common/SEO';

const AboutPage = () => {
  return (
    <PageContainer as="main" className="flex flex-col w-full overflow-hidden">
      <SEO 
        title="About Us"
        description="Learn about Prime Time Research Media, our vision, mission, and how we empower brands through market research, PR, and prestigious awards."
      />
      <AboutSummary />
      <StatsSection />
      <ServicesMarquee />
      <ChiefGuestsCarousel />
      <BrandDivider />
      <TestimonialSection />
      <UpcomingEventsSection />

    </PageContainer>
  );
};

export default AboutPage;

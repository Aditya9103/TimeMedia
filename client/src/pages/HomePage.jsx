import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import ServicesMarquee from '../components/home/ServicesMarquee';
import HeroVideo from '../components/home/HeroVideo';
import HomeFaqSection from '../components/home/HomeFaqSection';
import ServicesGrid from '../components/home/ServicesGrid';
import ResearchMethodology from '../components/home/ResearchMethodology';
import SelectionProcess from '../components/home/SelectionProcess';
import TestimonialSection from '../components/home/TestimonialSection';
import StatsSection from '../components/home/StatsSection';
import LatestNewsSection from '../components/home/LatestNewsSection';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';
import ClientLogosStrip from '../components/home/ClientLogosStrip';
import AboutSummary from '../components/home/AboutSummary';
import ChiefGuestsCarousel from '../components/home/ChiefGuestsCarousel';
import BrandDivider from '../components/home/BrandDivider';

const HomePage = () => {
  return (
    <>
      <HeroVideo />
      <PageContainer className="flex flex-col w-full overflow-hidden">

        <BrandDivider />
        <ClientLogosStrip />
        <AboutSummary />
        <ChiefGuestsCarousel />
        <ServicesGrid />
        <ServicesMarquee />
        <ResearchMethodology />
        <SelectionProcess />
        <TestimonialSection />
        <HomeFaqSection />
        <StatsSection />
        <LatestNewsSection />
        <UpcomingEventsSection />
      </PageContainer>
    </>
  );
};

export default HomePage;

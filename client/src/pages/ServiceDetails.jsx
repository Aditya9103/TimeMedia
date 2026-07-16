import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import { servicesData } from '../data/servicesData';
import ServiceHero from '../components/services/ServiceHero';
import ServiceBenefits from '../components/services/ServiceBenefits';
import ServiceWhyUs from '../components/services/ServiceWhyUs';
import ServiceMiddleImage from '../components/services/ServiceMiddleImage';
import ServiceSectors from '../components/services/ServiceSectors';
import RelatedServices from '../components/services/RelatedServices';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Load data
    if (serviceId && servicesData[serviceId]) {
      setData(servicesData[serviceId]);
    } else {
      setData(null);
    }
  }, [serviceId]);

  if (!serviceId) {
    // If no ID provided, default to the first service
    return <Navigate to="/services/market-research" replace />;
  }

  // If ID provided but not found in data
  if (data === null) {
    if (servicesData[serviceId]) {
      // Waiting for state update
      return <div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>;
    }
    return <Navigate to="/services/market-research" replace />;
  }

  return (
    <PageContainer className="min-h-screen  font-sans">
      {/* Section 1: Hero */}
      <ServiceHero data={data.hero} />

      {/* Section 2: Key Benefits */}
      <ServiceBenefits data={data.benefits} />

      {/* Section 2.5: Why Us and Extra Info */}
      {(data.whyItMatters || data.whyChooseUs || data.extraSections) && (
        <ServiceWhyUs
          whyItMatters={data.whyItMatters}
          whyChooseUs={data.whyChooseUs}
          extraSections={data.extraSections}
        />
      )}

      {/* Section 3: Middle Large Image */}
      {data.middleImage && (
        <ServiceMiddleImage imageSrc={data.middleImage} />
      )}

      {/* Section 4: Our Sectors */}
      {data.sectors && (
        <ServiceSectors data={data.sectors} />
      )}

      {/* Section 5: Related Services Slider */}
      <RelatedServices relatedIds={data.relatedServices} />

      <UpcomingEventsSection />
    </PageContainer>
  );
}

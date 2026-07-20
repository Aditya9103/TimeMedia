import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import { advertisingServicesData } from '../data/advertisingServicesData';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';
import RelatedAdvertisingServices from '../components/services/RelatedAdvertisingServices';
import AdvertisingServiceHero from '../components/services/AdvertisingServiceHero';
import AdvertisingServiceBenefits from '../components/services/AdvertisingServiceBenefits';
import SEO from '../components/common/SEO';

export default function AdvertisingServiceDetail() {
  const { serviceId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Load data
    const service = advertisingServicesData.find(s => s.id === serviceId);
    if (service) {
      setData(service);
    } else {
      setData(null);
    }
  }, [serviceId]);

  if (!serviceId) {
    return <Navigate to="/advertising-services/auto-rickshaw-branding" replace />;
  }

  // Waiting for state update or if ID provided but not found
  if (data === null) {
    const exists = advertisingServicesData.some(s => s.id === serviceId);
    if (exists) {
      return <div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>;
    }
    return <Navigate to="/advertising-services/auto-rickshaw-branding" replace />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.title,
    "name": data.content.headline,
    "description": data.content.fullDescription.substring(0, 200) + "...",
    "provider": {
      "@type": "Organization",
      "name": "Prime Time Research Media",
      "url": "https://timemedia.in"
    },
    "image": `https://timemedia.in${data.image}`
  };

  return (
    <PageContainer as="main" className="min-h-screen font-sans">
      <SEO
        title={`${data.title} | Prime Time Research Media`}
        description={data.content.fullDescription.substring(0, 150) + "..."}
        image={`https://timemedia.in${data.image}`}
        schema={serviceSchema}
      />

      <AdvertisingServiceHero data={data} />
      <AdvertisingServiceBenefits data={data} />

      <RelatedAdvertisingServices currentServiceId={serviceId} />

      <UpcomingEventsSection />
    </PageContainer>
  );
}

import React, { useEffect } from 'react';
import PageContainer from '../components/layout/PageContainer';
import SEO from '../components/common/SEO';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-slate-50 min-h-screen py-16">
      <SEO
        title="Refund & Return Policy | Prime Time Research Media"
        description="Return and Refund Policy for Prime Time Research Media Private Limited. Information on our refund rules for venue and date changes."
      />
      <PageContainer>
        <article className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
          <header className="mb-12 border-b border-slate-100 pb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Refund & Return Policy</h1>
            <p className="text-lg text-slate-500 font-medium">Prime Time Research Media Private Limited</p>
          </header>

          <div className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-sky-500 max-w-none space-y-6">
            <p className="text-xl leading-relaxed text-slate-700">
              The Company reserves its rights to change, modify and alter the venue, date & time and the guests with proper notice for any such reasons/ exigencies which are unavoidable at the hands of the Company. In such condition <strong>No Refund will be applicable.</strong>
            </p>
          </div>
        </article>
        <UpcomingEventsSection />
      </PageContainer>
    </main>
  );
};

export default RefundPolicy;

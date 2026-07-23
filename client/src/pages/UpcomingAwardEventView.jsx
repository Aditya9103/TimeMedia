import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import { Helmet } from 'react-helmet-async';
import { MapPin, Calendar, User, ArrowRight } from 'lucide-react';
import RelatedAwards from '../components/common/RelatedAwards';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';

const UpcomingAwardEventView = ({ event, categorySlug, relatedEvents }) => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet><title>{event.title} | Prime Time Media</title></Helmet>

      {/* Header Info Above Hero */}
      <PageContainer className="pt-24 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-6 border-b border-slate-300 mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-[42px] font-bold font-display leading-tight text-slate-900 lg:w-1/2">
            {event.title}
          </h1>

          <div className="flex flex-row flex-wrap md:flex-nowrap items-start lg:items-center gap-6 md:gap-8 lg:justify-end lg:w-1/2">
            {event.venue && (
              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-2 text-base font-bold text-slate-900">
                  <MapPin size={18} className="text-[#15b7b9]" /> Venue :
                </span>
                <span className="text-sm text-slate-700">{event.venue}</span>
              </div>
            )}

            {event.venue && event.chiefGuest && (
              <div className="hidden md:block w-px h-12 bg-slate-200"></div>
            )}

            {event.chiefGuest && (
              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-2 text-base font-bold text-slate-900">
                  <User size={18} className="text-[#15b7b9]" /> Chief Guest :
                </span>
                <span className="text-sm text-slate-700">{event.chiefGuest}</span>
              </div>
            )}

            {(event.venue || event.chiefGuest) && event.eventDate && (
              <div className="hidden md:block w-px h-12 bg-slate-200"></div>
            )}

            {event.eventDate && (
              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-2 text-base font-bold text-slate-900">
                  <Calendar size={18} className="text-[#15b7b9]" /> Date :
                </span>
                <span className="text-sm text-slate-700">
                  {new Date(event.eventDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
            )}
          </div>
        </div>

        {event.shortDescription && (
          <p className="text-lg text-slate-700 w-full leading-relaxed mb-4">{event.shortDescription}</p>
        )}
      </PageContainer>

      {/* Hero Section */}
      {event.heroImage?.url && (
        <PageContainer>
          <div className="w-full bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <img src={event.heroImage.url} alt={event.heroImage.alt || event.title} className="w-full h-auto" />
          </div>
        </PageContainer>
      )}

      {/* Content Section */}
      <PageContainer className="py-12 space-y-16">

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="prose prose-lg prose-slate max-w-none">
              {event.narrativeHtml ? (
                <div dangerouslySetInnerHTML={{ __html: event.narrativeHtml }} />
              ) : (
                <p className="text-slate-600 text-lg leading-relaxed">Join us for the upcoming {event.title}. This prestigious gathering brings together industry leaders and visionaries. Nominate deserving candidates now to recognize their extraordinary achievements.</p>
              )}
            </div>

            {/* Nominate Now Call to Action inline */}
            <div className="bg-blue-50 border border-blue-100 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Nominations are Open</h3>
                <p className="text-slate-600">Submit your nominations for the {event.title} today and celebrate excellence.</p>
              </div>
              <Link to="/nomination" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 whitespace-nowrap">
                Nominate Now <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-24">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 font-display">Event Details</h3>
            <ul className="space-y-6">
              {event.chiefGuest && (
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 border border-blue-100">
                    <User size={24} />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Chief Guest</span>
                    <span className="text-slate-900 font-bold text-lg leading-tight">{event.chiefGuest}</span>
                  </div>
                </li>
              )}
              {event.venue && (
                <li className="flex items-start gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 border border-emerald-100">
                    <MapPin size={24} />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Venue</span>
                    <span className="text-slate-900 font-bold text-lg leading-tight">{event.venue}</span>
                  </div>
                </li>
              )}
              {event.eventDate && (
                <li className="flex items-start gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0 border border-purple-100">
                    <Calendar size={24} />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date</span>
                    <span className="text-slate-900 font-bold text-lg leading-tight">{new Date(event.eventDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </li>
              )}
            </ul>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <Link to="/nomination" className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg">
                Submit Nomination
              </Link>
            </div>
          </div>
        </section>

        {/* Section: Related Awards */}
        <RelatedAwards relatedEvents={relatedEvents} categorySlug={categorySlug} />
        <UpcomingEventsSection />


      </PageContainer>
    </div>
  );
};

export default UpcomingAwardEventView;

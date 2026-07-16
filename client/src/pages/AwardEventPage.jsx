import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetAwardEventBySlugQuery, useGetAwardEventsQuery } from '../store/apiSlice';
import PageContainer from '../components/layout/PageContainer';
import { Helmet } from 'react-helmet-async';
import { MapPin, Calendar, ChevronRight, X, User } from 'lucide-react';
import UpcomingAwardEventView from './UpcomingAwardEventView';
import RelatedAwards from '../components/common/RelatedAwards';

const AwardEventPage = () => {
  const { eventSlug, categorySlug } = useParams();

  // Fetch specific event
  const { data: eventRes, isLoading } = useGetAwardEventBySlugQuery(eventSlug);
  const event = eventRes?.data;

  // Fetch related events for the slider
  const { data: allEventsRes } = useGetAwardEventsQuery({ category: categorySlug });
  const relatedEvents = (allEventsRes?.data || []).filter(e => e.slug !== eventSlug);

  const [lightboxImg, setLightboxImg] = useState(null);

  if (isLoading) return <div className="py-20 text-center">Loading Event Details...</div>;
  if (!event) return <div className="py-20 text-center text-rose-500">Event not found.</div>;

  if (event.status === 'upcoming' || event.status === 'draft') {
    return <UpcomingAwardEventView event={event} categorySlug={categorySlug} relatedEvents={relatedEvents} />;
  }

  return (
    <div className="bg-white min-h-screen">
      <Helmet><title>{event.title} | Prime Time Media</title></Helmet>

      {/* Hero Section */}
      {event.heroImage?.url && (
        <div className="w-full h-64 md:h-96 bg-slate-100">
          <img src={event.heroImage.url} alt={event.heroImage.alt || event.title} className="w-full h-full object-cover" />
        </div>
      )}
      {/* 
      Event Header Info
      <PageContainer className={`relative z-10 ${event.heroImage?.url ? 'mt-12' : 'pt-24'} mb-4`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display leading-tight text-slate-800">{event.title}</h1>
        <div className="flex flex-wrap items-center gap-6 text-slate-600">
          {event.venue && (
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-[#15b7b9]" />
              <span className="text-lg font-medium">{event.venue}</span>
            </div>
          )}
          {event.year && (
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-[#15b7b9]" />
              <span className="text-lg font-medium">{event.year}</span>
            </div>
          )}
        </div>
      </PageContainer> */}

      <PageContainer className="py-16 space-y-24">
        {/* Section 1: Venue & Description Text */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 prose prose-lg prose-slate max-w-none">
            {event.narrativeHtml ? (
              <div dangerouslySetInnerHTML={{ __html: event.narrativeHtml }} />
            ) : (
              <p className="text-slate-600 text-lg leading-relaxed">Join us in celebrating the extraordinary achievements and innovations recognized at the {event.title}. This prestigious gathering brings together industry leaders and visionaries.</p>
            )}
          </div>

          <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 font-display">Event Highlights</h3>
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
          </div>
        </section>

        {/* Section 2: Previous Award's Photo Gallery */}
        {event.galleryImages && event.galleryImages.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">Photo Gallery</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {event.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer group bg-slate-100"
                  onClick={() => setLightboxImg(img.url)}
                >
                  <img
                    src={img.url}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Video Gallery */}
        {event.videoGallery && event.videoGallery.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-display">Video Highlights</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {event.videoGallery.map((vid, idx) => {
                // Extract YouTube ID
                const getYoutubeId = (url) => {
                  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                  const match = url.match(regExp);
                  return (match && match[2].length === 11) ? match[2] : null;
                };
                const ytId = getYoutubeId(vid.url);
                if (!ytId) return null;

                return (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative w-full overflow-hidden rounded-xl bg-slate-200" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${ytId}`}
                        className="absolute top-0 left-0 w-full h-full"
                        title={vid.title || 'YouTube Video'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {vid.title && <h4 className="mt-4 font-bold text-slate-800 px-2">{vid.title}</h4>}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Section 4: Related Awards */}
        <RelatedAwards relatedEvents={relatedEvents} categorySlug={categorySlug} />
      </PageContainer>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" onClick={() => setLightboxImg(null)}>
            <X size={32} />
          </button>
          <img src={lightboxImg} alt="Gallery Enlarge" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        </div>
      )}
    </div>
  );
};

export default AwardEventPage;

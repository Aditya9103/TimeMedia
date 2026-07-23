import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from './PageContainer';
import ContactForm from '../common/ContactForm';

const FacebookIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const YoutubeIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
const InstagramIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const WhatsappIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;


const Footer = () => {
  const [fbWidth, setFbWidth] = useState(340);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 380) {
        setFbWidth(280);
      } else {
        setFbWidth(340);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-8 md:pt-20 md:pb-10 border-t border-gray-800">
      <PageContainer>

        {/* Top Section: Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

          {/* Useful Links */}
          <nav aria-label="Useful Links">
            <h4 className="text-sky-400 font-bold text-lg md:text-xl mb-4 md:mb-6">Useful Links</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund & Return Policy</Link></li>
            </ul>
          </nav>

          {/* Site Links */}
          <nav aria-label="Site Links">
            <h4 className="text-sky-400 font-bold text-lg md:text-xl mb-4 md:mb-6">Site Links</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li><Link to="/our-patrons" className="hover:text-white transition-colors">Our Patrons</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Awards */}
          <nav aria-label="Awards Links">
            <h4 className="text-sky-400 font-bold text-lg md:text-xl mb-4 md:mb-6">Awards</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li><Link to="/events/excellence-awards" className="hover:text-white transition-colors">Excellence Awards 2025</Link></li>
              <li><Link to="/events/healthcare-awards" className="hover:text-white transition-colors">Healthcare Awards 2025</Link></li>
              <li><Link to="/events/global-icon-awards" className="hover:text-white transition-colors">Global Icon Awards 2025</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services Links">
            <h4 className="text-sky-400 font-bold text-lg md:text-xl mb-4 md:mb-6">Services</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li><Link to="/services/market-research" className="hover:text-white transition-colors">Market Research Ratings & Accreditations</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing Web Development</Link></li>
              <li><Link to="/services/consultancy" className="hover:text-white transition-colors">Business Consultancy Service</Link></li>
              <li><Link to="/services/brand-management" className="hover:text-white transition-colors">Brand-Reputation Manage</Link></li>
            </ul>
          </nav>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 lg:gap-24 max-w-6xl mx-auto mt-8">

          {/* Left: Tagline & Contact Form */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-6 md:mb-8">
              Step up from <span className="text-sky-400">Local to Global</span>
            </h2>

            <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/60 border-b-4 border-r-4 border-b-slate-950/60 border-r-slate-950/60 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] w-full max-w-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent"></div>
              
              <h4 className="text-white font-black text-2xl mb-8 text-left relative z-10 flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-sky-500/20 flex items-center justify-center text-sky-400 rotate-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </span>
                Send a Message
              </h4>
              
              <div className="text-left relative z-10">
                <ContactForm theme="dark" />
              </div>
            </div>
          </div>

          {/* Right: Social & Facebook Embed Placeholder */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-12">

            <h4 className="text-white font-bold text-lg md:text-xl mb-4 md:mb-6">Connect With Us</h4>
            {/* Social Icons */}
            <div className="flex flex-wrap justify-start gap-3 md:gap-4 mb-8">
              <a href="https://www.facebook.com/primetimeresearch" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                <FacebookIcon />
              </a>
              <a href="https://www.youtube.com/@primetimermedia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                <YoutubeIcon />
              </a>
              <a href="https://wa.me/919810882769" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                <WhatsappIcon />
              </a>
              <a href="https://www.instagram.com/primetimemediain/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/company/primetimeresearch-media/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                <LinkedinIcon />
              </a>
            </div>

            {/* Facebook Page Widget */}
            <div className="flex w-full max-w-[340px] bg-white rounded-lg overflow-hidden shadow-lg justify-center mx-auto lg:mx-0">
              <iframe
                key={fbWidth}
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprimetimeresearch&tabs=timeline%2Cevents%2Cmessages&width=${fbWidth}&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&locale=en_US`}
                width="100%"
                height="450"
                className="w-full"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Prime Time Research Media Facebook Page"
              ></iframe>
            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Prime Time Research Media. All rights reserved.
        </div>
        <div className="gap-2 mt-4 flex justify-start sm:justify-center pb-1 px-5">
          <a
            href="https://primeimpact.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-500/30 bg-amber-500/5 hover:border-amber-500/80 hover:bg-amber-500/10 transition-all duration-300 shadow-lg shadow-amber-500/5"
          >
            <span className="text-[10px] text-slate-400 tracking-wider font-medium">
              ✦ Designed &amp; Developed by
            </span>
            <span className="text-[12px] font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-400">
              Prime Impact IT Solutions
            </span>
          </a>
        </div>

      </PageContainer>
    </footer>
  );
};

export default Footer;

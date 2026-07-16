import React from 'react';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerFadeIn';
import { MapPin, Phone, Smartphone, ChevronRight } from 'lucide-react';
import ContactForm from '../components/common/ContactForm';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';
import PageContainer from '../components/layout/PageContainer';
import SEO from '../components/common/SEO';

const FacebookIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const YoutubeIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
const InstagramIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const LinkedinIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const WhatsappIcon = () => <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;


const ContactUs = () => {
    return (
        <main className="flex flex-col w-full min-h-screen bg-gray-50 pt-5">
            <SEO 
                title="Contact Us"
                description="Get in touch with Prime Time Research Media. Contact our team for PR, market research, and business consultancy services."
            />
            <PageContainer>
                {/* Header Area */}
                <header className="py-8 text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Contact Us</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Prime Time Research Media Pvt Ltd</h2>
                </header>

                {/* Map & Info Card */}
                <div className="mb-16">
                    <div className=" bg-white rounded-xl shadow-md border border-gray-200 p-8 md:p-12 flex flex-col  gap-12">
                        <div className='flex flex-col lg:flex-row gap-12'>
                            {/* Left: Contact Info List */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
                                <StaggerContainer className="flex flex-col gap-6">

                                    <StaggerItem className="flex items-center gap-4">
                                        <ChevronRight className="text-teal-400 w-6 h-6 flex-shrink-0" />
                                        <span className="text-lg text-gray-800 font-medium">Registered Office</span>
                                    </StaggerItem>

                                    <StaggerItem className="flex items-center gap-4">
                                        <div className="bg-teal-400 p-2 rounded-lg">
                                            <Phone className="text-white w-5 h-5 flex-shrink-0" />
                                        </div>
                                        <span className="text-lg text-gray-800">+91 11 69268754, +91-11-35773024</span>
                                    </StaggerItem>

                                    <StaggerItem className="flex items-center gap-4">
                                        <div className="bg-teal-400 p-2 rounded-lg">
                                            <Smartphone className="text-white w-5 h-5 flex-shrink-0" />
                                        </div>
                                        <span className="text-lg text-gray-800">+91 9810 91 0686 - Helpline</span>
                                    </StaggerItem>

                                    <StaggerItem className="flex items-center gap-4">
                                        <div className="bg-teal-400 p-2 rounded-lg">
                                            <Smartphone className="text-white w-5 h-5 flex-shrink-0" />
                                        </div>
                                        <span className="text-lg text-gray-800">+91 9971 00 2984 - For Sponsorship</span>
                                    </StaggerItem>

                                    <StaggerItem className="flex items-center gap-4">
                                        <div className="bg-teal-400 p-2 rounded-lg">
                                            <Smartphone className="text-white w-5 h-5 flex-shrink-0" />
                                        </div>
                                        <span className="text-lg text-gray-800">+91 9810 88 2769 - For Nominations</span>
                                    </StaggerItem>

                                    <StaggerItem className="flex items-start gap-4">
                                        <div className="bg-teal-400 p-2 rounded-lg mt-1">
                                            <MapPin className="text-white w-5 h-5 flex-shrink-0" />
                                        </div>
                                        <address className="text-lg text-gray-800 leading-relaxed not-italic">
                                            C-31, Nawada Housing Complex, Shivaji Marg, New Delhi , 110059
                                        </address>
                                    </StaggerItem>


                                    {/* Social Icons */}
                                    <StaggerItem className='flex flex-col gap-2'>
                                        <h4 className=" font-bold text-xl mb-6">Connect With Us</h4>
                                        <nav aria-label="Social Media" className="flex gap-4 mb-8">
                                            <a href="https://www.facebook.com/primetimeresearch" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                                                <FacebookIcon />
                                            </a>
                                            <a href="https://www.youtube.com/@primetimermedia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                                                <YoutubeIcon />
                                            </a>
                                            <a href="https://wa.me/911140159887" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                                                <WhatsappIcon />
                                            </a>
                                            <a href="https://www.instagram.com/primetimeresearchmedia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                                                <InstagramIcon />
                                            </a>
                                            <a href="https://www.linkedin.com/company/primetimeresearch-media/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white hover:-translate-y-1 transition-transform">
                                                <LinkedinIcon />
                                            </a>
                                        </nav>
                                    </StaggerItem>

                                </StaggerContainer>

                            </div>


                            {/* Right: Map Embed */}
                            <div className="w-full lg:w-1/2 min-h-[400px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                                <map name="office-location">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Prime%20Time%20Research%20Media%20Private%20Limited,%20New%20Delhi&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, minHeight: '400px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Prime Time Research Media Location"
                                    ></iframe>
                                </map>
                            </div>

                        </div>
                        {/* Bottom Form Area */}
                        <div className="bg-[#47baf0] w-full py-16 pb-24">
                            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl">
                                <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-10">Message with Us</h2>
                                <div className="bg-gray-900 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-xl">
                                    <ContactForm theme="dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <UpcomingEventsSection />
            </PageContainer>


        </main>
    );
};

export default ContactUs;

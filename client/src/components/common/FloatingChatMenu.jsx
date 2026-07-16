import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import WhatsAppButton from './WhatsAppButton';
import CallButton from './callButton';

export default function FloatingChatMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">

            {/* The child buttons container */}
            <div className={`flex flex-col items-end gap-4 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
                <CallButton />
                <WhatsAppButton />
            </div>

            {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#FF5A5F] to-[#ff7e82] text-white rounded-full shadow-[0_10px_25px_-5px_rgba(255,90,95,0.6)] hover:shadow-[0_15px_35px_-5px_rgba(255,90,95,0.8)] transform hover:scale-110 transition-all duration-300 z-50 border-2 border-white/20"
                aria-label="Toggle Contact Menu"
            >
                {/* Pulse Rings */}
                {!isOpen && (
                    <>
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF5A5F] opacity-75 animate-ping duration-1000"></span>
                        <span className="absolute inline-flex h-16 w-16 rounded-full bg-[#FF5A5F] opacity-40 animate-pulse duration-1000"></span>
                    </>
                )}

                {isOpen ? (
                    <FaTimes className="w-6 h-6 animate-in spin-in-90 duration-300" />
                ) : (
                    <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" className="animate-in zoom-in duration-300 drop-shadow-sm">
                        <path d="M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-4l-4 4v-4H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z" fill="white" />
                        <rect x="7" y="8" width="10" height="2.5" rx="1.25" fill="#FF5A5F" />
                        <rect x="7" y="13" width="6" height="2.5" rx="1.25" fill="#FF5A5F" />
                    </svg>
                )}
            </button>
        </div>
    );
}

import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa"
import CallModal from "./CallModal";

export default function CallButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="relative group flex items-center justify-center"
                aria-label="Call us"
            >
                {/* Pulse Rings */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75 animate-ping"></span>
                <span className="absolute inline-flex h-14 w-14 rounded-full bg-sky-500 opacity-40 animate-pulse"></span>

                {/* Button Body */}
                <div className="relative bg-sky-500 text-white p-3 rounded-full shadow-[0_10px_25px_-5px_rgba(14,165,233,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.7)] transform hover:scale-110 transition-all duration-300 border-2 border-white/20">
                    <FaPhoneAlt className="w-8 h-8" />
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 px-3 py-1.5 bg-white text-sky-500 text-sm font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border-b-4 border-sky-500">
                    Call Us
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
                </div>
            </button>

            {/* Call Modal */}
            {isModalOpen && (
                <CallModal onClose={() => setIsModalOpen(false)} />
            )}
        </>
    );
}

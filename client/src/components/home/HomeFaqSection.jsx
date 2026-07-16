import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../animations/StaggerFadeIn';

const HomeFaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How do you promote a creative agency?",
      answer: "The phrase implies that the agencies creative solutions are not just theoretical or abstract concepts but deliver tangible and measurable results. It emphasizes the agency's commitment"
    },
    {
      question: "How do agencies acquire clients?",
      answer: "They handle tasks such as market research, creative concept development, media planning and buying, and campaign execution across various channels creating and managing advertising campaigns for clients."
    },
    {
      question: "What types of agencies exist?",
      answer: "These agencies specialize in digital marketing and online presence. They offer services such as website development, search engine optimization (SEO), search engine marketing (SEM)."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="flex flex-col lg:flex-row gap-12 items-center">

        {/* Left Side: FAQ Text & Accordion */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-sky-700 font-bold uppercase tracking-widest text-sm mb-4">FAQ'S QUESTIONS</h4>
          <h2 className="text-3xl md:text-4xl font-black text-black leading-tight mb-10">
            Connecting customers To your brand
          </h2>

          <StaggerContainer className="flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <StaggerItem key={index} className="border-b border-gray-300 py-6 first:border-t-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left focus:outline-none"
                  >
                    <h3 className="text-xl font-bold text-black">{faq.question}</h3>
                    <span className="text-black ml-4">
                      {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-auto min-h-[300px] md:h-full bg-gray-100 rounded-lg shadow-md border-4 border-white overflow-hidden relative">
            <img
              src="/home/faq.jpg"
              alt="Event Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeFaqSection;

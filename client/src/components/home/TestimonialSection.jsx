import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      title: "Awesome Services",
      text: "Awarded for placement mentor of the year. Prime time research media motivates us to do innovation for the betterment of society. It is one of the best company which provides the strategy or courage towrds the work",
      image: "/home/testimonial1.jpg"
    },
    {
      title: "Good Services",
      text: "I am rupesh kumar gupta. I am a LL fee trainer. It is a very big honour for me to get this award from prime time research media. Thank you for supporting my small enterprises. I am so glad to get this opportunity thank you prime time research media.",
      image: "/home/testimonial2.jpg"
    },
    {
      title: "Good Services",
      text: "Bodhika is a startup which made organic soaps. Thank you soo much prime time research media to support our start up and provides us a better place in that market.",
      image: "/home/testimonial3.jpg"
    },
    {
      title: "Good Services",
      text: "I littel step towards digitization. Thank you prime time research media supporting us. And thank you for this repeatable honour",
      image: "/home/testimonial4.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle the seamless loop wrap-around
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); // Must match the duration-700 class below
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, testimonials.length]);

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // We append a clone of the first testimonial to the end for the seamless slide effect
  const extendedTestimonials = [...testimonials, testimonials[0]];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Half: Testimonial Text */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-sky-700 font-bold uppercase tracking-widest text-sm mb-4">TESTIMONIAL</h4>
          <h2 className="text-2xl md:text-4xl font-black text-black leading-tight mb-12">
            What People Say About Us
          </h2>

          <div className="overflow-hidden">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex items-center gap-6 mb-6">
                    {/* Quote Icon (styling to match outline look) */}
                    <div className="text-gray-300">
                      <Quote size={64} strokeWidth={1} fill="transparent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black">
                      {testimonial.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === (currentIndex % testimonials.length) ? 'bg-sky-700' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Half: Image Slider */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[450px] shadow-2xl rounded-xl overflow-hidden">
          <div
            className={`flex h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const images = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png" 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Smooth scroll function targeting the specific ID
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-smes');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    // Outer container hides anything that slides outside of it (overflow-hidden)
    <div className="relative h-[400px] w-full overflow-hidden bg-gray-900">
      
      {/* 1. THE SLIDING TRACK */}
      {/* This holds all images in a row and slides them left/right */}
      <div 
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div 
            key={index}
            className="relative h-full min-w-full bg-cover bg-center shrink-0"
            style={{ backgroundImage: `url('${img}')` }}
          >
            {/* Dark Overlay is attached to each image so it slides with them */}
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        ))}
      </div>

      {/* 2. STATIC CONTENT OVERLAY */}
      {/* Absolute positioning keeps the text completely still while the images slide underneath */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        {/* pointer-events-auto ensures the button is still clickable */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pointer-events-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">Shaping Metals.</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#8C1515] mb-6 drop-shadow-md">Shaping Futures.</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-sm">
            Uniting students and professionals in metallurgy to innovate, learn and lead.
          </p>
          
          {/* Added onClick handler for smooth scrolling */}
          <button 
            onClick={scrollToAbout}
            className="bg-[#8C1515] text-white px-6 py-3 rounded font-semibold hover:bg-[#4a0b0b] transition flex items-center gap-2 shadow-md"
          >
            Explore SMES
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-[#8C1515] transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-[#8C1515] transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === slideIndex 
                ? 'w-3 h-3 bg-[#8C1515] scale-110 shadow-md' 
                : 'w-2.5 h-2.5 bg-white opacity-60 hover:opacity-100'
            }`}
          ></button>
        ))}
      </div>

    </div>
  );
}
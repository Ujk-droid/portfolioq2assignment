'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Static imports for images
import slide1 from '/public/n1.jpg';
import slide2 from '/public/n2.jpg';
import slide3 from '/public/n3.jpg';
import slide4 from '/public/n4.jpg';
import slide5 from '/public/n5.jpg';
import slide6 from '/public/n6.jpg';
import slide7 from '/public/n7.jpg';
import slide8 from '/public/n8.jpg';
import slide9 from '/public/n1.jpg';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9];

  // Update the slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [images.length]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20 h-screen w-full dark:bg-black bg-gray-400 dark:bg-grid-gray-900 bg-grid-black/[0.2] relative">
      <div className="bg-gray-800 shadow-lg p-4 rounded-lg w-full max-w-3xl relative">
        {/* Image Display */}
        <div className="w-full h-96 overflow-hidden rounded-lg">
          <Image
            src={images[currentSlide]}
            alt={`Image ${currentSlide + 1}`}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-900"
          aria-label="Previous Slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-md hover:bg-gray-900"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

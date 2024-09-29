import React, { useState, useEffect } from 'react';

function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const baseUrl = import.meta.env.VITE_API_URL;
  const assetUrl = import.meta.env.VITE_ASSET_URL;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!isHovered) {
      const slideInterval = setInterval(goToNext, 3000); // Auto-slide every 3 seconds
      return () => clearInterval(slideInterval);
    }
  }, [currentIndex, isHovered]);

  return (
    <div
      className="relative w-full h-64 sm:h-96 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-300"
            style={{ backgroundImage: `url(${assetUrl}${slide.url})`, backgroundSize: 'cover', backgroundPosition: 'center',height:"300px" }}
          >
            <div className="bg-black bg-opacity-50 w-full h-full flex justify-center items-center">
              <h2 className="text-white text-3xl font-bold">{slide.caption}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-100 transition ease-in-out"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-100 transition ease-in-out"
      >
        &#10095;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'} focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

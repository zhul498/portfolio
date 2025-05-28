import React, { useState, useEffect, useRef } from 'react';

const ImageCarousel = () => {
  const images = [
    '/assets/carousel/img1.jpg',
    '/assets/carousel/img2.jpg',
    '/assets/carousel/img3.jpg',
    '/assets/carousel/img4.jpg',
    '/assets/carousel/img5.jpg',
    '/assets/carousel/img6.jpg',
    '/assets/carousel/img7.jpg',
    '/assets/carousel/img8.jpg',

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md overflow-hidden rounded-xl shadow-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-blue-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

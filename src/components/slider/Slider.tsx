import React, { useState, useRef, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;
  const slideWidth = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next slide index
      const nextIndex = (currentIndex + 1) % totalSlides;
      setCurrentIndex(nextIndex);

      // Update the slider position
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${slideWidth * nextIndex}%)`;
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        <div className="slide">
          <img src="assets/img1.jpg" alt="Image 1" />
        </div>
        <div className="slide">
          <img src="assets/img2.jpg" alt="Image 2" />
        </div>
        <div className="slide">
          <img src="assets/imgnew.jpg" alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default Slider;

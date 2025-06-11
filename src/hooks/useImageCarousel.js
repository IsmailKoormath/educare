"use client";

import { useState, useEffect } from "react";

const useImageCarousel = (images, delay = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const intervalId = setInterval(() => {
      setIsFading(true); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false); 
      }, 400); 
    }, delay);

    return () => clearInterval(intervalId);
  }, [images, delay]);

  return { currentImage: images[currentIndex], isFading };
};

export default useImageCarousel;

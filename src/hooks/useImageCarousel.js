"use client";

import { useState, useEffect } from "react";

const useImageCarousel = (images, delay = 2000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) {
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [images, delay]);

  return images[currentIndex];
};

export default useImageCarousel;

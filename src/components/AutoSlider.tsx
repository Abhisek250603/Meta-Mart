"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const AutoSlider = () => {
  const slides = [
    { id: 1, src: "/bg.jpg", alt: "First Slide" },
    { id: 2, src: "/slider.avif", alt: "Second Slide" },
    { id: 3, src: "/bg.jpg", alt: "Third Slide" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1800}
              height={900}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-teal-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;

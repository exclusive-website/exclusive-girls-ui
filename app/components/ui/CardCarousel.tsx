"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card, { CardProps } from "./Card";

interface CarouselProps {
  models: CardProps[];
}

const ModelCarousel: React.FC<CarouselProps> = ({ models }) => {
  const cardsPerView = 5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = models.length - cardsPerView;

  const cardWidth = 260;
  const gap = 16;
  const totalWidth = (cardWidth + gap) * models.length;

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
  <div className="w-full overflow-hidden py-10">
    <div className="relative max-w-[1440px] mx-auto flex items-center">

      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 p-3 bg-white shadow rounded-full hover:bg-gray-100 disabled:opacity-50
            hover:cursor-pointer"
      >
        <FaArrowLeft />
      </button>

      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
            width: `${totalWidth}px`,
          }}
        >
          {models.map((model) => (
            <div
              key={model.id}
              className="flex-shrink-0"
              style={{
                width: `${cardWidth}px`,
                marginRight: `${gap}px`,
              }}
            >
              <Card {...model} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={currentIndex === maxIndex}
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 p-3 bg-white shadow rounded-full hover:bg-gray-100 disabled:opacity-50
            hover:cursor-pointer"
      >
        <FaArrowRight />
      </button>
    </div>
  </div>
);


};

export default ModelCarousel;

"use client";
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaMapPin } from "react-icons/fa6";

interface CardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  image: string[];
  topped: boolean;
  new: boolean;
  aviailable: boolean;
  description: {
    weight: string;
    height: string;
    breast: string;
    hair: string[];
  };
}

export default function Card(props: CardProps) {
  const [hovered, setHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    name,
    age,
    location,
    image,
    topped,
    new: isNew,
    aviailable,
    description,
  } = props;

  // Handlers for arrow navigation
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((currentImageIndex - 1 + image.length) % image.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((currentImageIndex + 1) % image.length);
  };

  return (
    <div
      className={`relative rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 ${
        hovered ? "shadow-xl" : "shadow-md"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: "100%", height: "480px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none rounded-lg"></div>
      <img
        src={image[currentImageIndex]}
        alt={name}
        className="w-full h-full object-cover rounded-lg"
        draggable={false}
      />

      <div className="absolute top-3 left-3 flex space-x-2 z-20">
        {isNew && (
          <span className="bg-brand text-white px-4 py-1 text-regular font-bold">
            Nová
          </span>
        )}
        {topped && (
          <span className="bg-text-darkest text-white px-4 py-1 text-regular font-bold">
            Top
          </span>
        )}
      </div>

      <div
        className={`absolute bottom-4 left-4 text-white z-20 transition-opacity duration-300 ${
          hovered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <p className="text-lg md:text-2xl font-bold font-playfair">
          {name} ({age})
        </p>
        <div className="flex mb-2 items-center">
          <FaMapPin className="text-light-2 w-4 h-4 mr-2" />
          <p className="text-regular">{location}</p>
        </div>
        <p className="text-sm">
          {aviailable ? (
            <div className="flex p-2 bg-white rounded-full">
              <span className="rounded-full bg-brand w-[16px] h-[16px] mr-2"></span>
              <p className="font-parkinsans text-xs text-light text-black">
                Dostupná
              </p>
            </div>
          ) : (
            <div className="flex p-2 bg-white rounded-full">
              <span className="rounded-full bg-light-2 border border-text-gray1 w-[16px] h-[16px] mr-2"></span>
              <p className="font-parkinsans text-xs text-light text-black">
                Nedostupná
              </p>
            </div>
          )}
        </p>
      </div>

      {hovered && (
        <>
          <div className="absolute inset-0 px-4 flex justify-between items-center z-30 pointer-events-auto">
            <button
              onClick={prevImage}
              className="bg-white text-black rounded-full p-3 focus:outline-none hover:cursor-pointer"
              aria-label="Previous image"
            >
              <FaArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="bg-white text-black rounded-full p-3 focus:outline-none hover:cursor-pointer"
              aria-label="Next image"
            >
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute bottom-20 left-4 right-4 rounded-md p-4 text-white z-20">
            <div className="flex justify-between font-parkinsans text-sm">
              <p className="w-full">Váha</p>
              <strong className="w-full flex text-start">
                {description.weight}kg
              </strong>
            </div>
            <div className="flex justify-between font-parkinsans text-sm">
              <p className="w-full">Výška</p>
              <strong className="w-full flex text-start">
                {description.weight}cm
              </strong>
            </div>
            <div className="flex justify-between font-parkinsans text-sm">
              <p className="w-full">Prsia</p>
              <strong className="w-full flex text-start">
                {description.breast}
              </strong>
            </div>
            <div className="flex justify-between font-parkinsans text-sm">
              <p className="w-full">Vlasy</p>
              <strong className="w-full flex text-start">
                {description.hair.join(", ")}
              </strong>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-30">
            <button className="w-full bg-brand hover:cursor-pointer text-white py-3 rounded-lg font-bold transition">
              Zobraziť
            </button>
          </div>
        </>
      )}
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

type MediaSliderProps = {
  media: (string | { type: "video"; url: string })[]; // Media could be either image URLs or video objects
};

const MediaSlider: React.FC<MediaSliderProps> = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isThumbnailClicked, setIsThumbnailClicked] = useState(false); // New state variable
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    setIsThumbnailClicked(false); // Reset for arrow clicks
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + media.length) % media.length
    );
    setIsThumbnailClicked(false); // Reset for arrow clicks
  };

  const currentMedia = media[currentIndex];

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setIsThumbnailClicked(true); // Set true when a thumbnail is directly clicked
  };

  // --- Start of Scroll Logic Adjustments ---

  const getThumbnailStartIndex = () => {
    const totalThumbnails = media.length;
    const thumbnailsToShow = 3;

    if (totalThumbnails <= thumbnailsToShow) {
      return 0;
    }

    if (currentIndex <= 1) {
      return 0;
    }
    if (currentIndex >= totalThumbnails - 1) {
      return totalThumbnails - thumbnailsToShow;
    }
    return currentIndex - 1;
  };

  const thumbnailStartIndex = getThumbnailStartIndex();
  const visibleThumbnails = media.slice(
    thumbnailStartIndex,
    thumbnailStartIndex + 3
  );

  // Use useEffect to scroll the active thumbnail into view
  useEffect(() => {
    // Only scroll into view if a thumbnail was explicitly clicked
    if (isThumbnailClicked && thumbnailContainerRef.current) {
      const activeThumbnailElement =
        thumbnailContainerRef.current.children[
          currentIndex - thumbnailStartIndex
        ];

      if (activeThumbnailElement) {
        activeThumbnailElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
      // Reset isThumbnailClicked after scrolling
      setIsThumbnailClicked(false);
    }
  }, [currentIndex, thumbnailStartIndex, isThumbnailClicked]); // Add isThumbnailClicked to dependencies

  // --- End of Scroll Logic Adjustments ---

  return (
    <div className="relative w-full max-w-[600px]">
      {/* Main Media Display (Image or Video) */}
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-4 p-2 text-white bg-white rounded-full text-[40px] hover:bg-opacity-70 cursor-pointer z-10"
        >
          <FaArrowLeft className="w-4 h-4 text-black" />
        </button>
        <div className="w-[600px] overflow-hidden transition-transform duration-300">
          {typeof currentMedia === "string" ? (
            <Image
              width={600}
              height={800}
              src={currentMedia}
              alt="Model preview"
              className="w-[600px] h-[800px] object-cover object-center transition-all duration-500 ease-in-out"
            />
          ) : (
            <video
              src={currentMedia.url}
              className="w-[600px] h-[800px] object-cover"
              controls
              muted
              loop
            />
          )}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-4 p-2 bg-white rounded-full text-[40px] hover:bg-opacity-70 cursor-pointer"
        >
          <FaArrowRight className="w-4 h-4 text-black" />
        </button>
      </div>

      {/* Thumbnails with horizontal scroll */}
      <div
        ref={thumbnailContainerRef}
        className="flex justify-start mt-4 space-x-2 pb-2 max-w-[600px] overflow-x-auto scrollbar-hide transition-all duration-300 ease-in-out"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {visibleThumbnails.map((item, index) => (
          <div
            key={thumbnailStartIndex + index}
            onClick={() => handleThumbnailClick(thumbnailStartIndex + index)}
            className={`flex-shrink-0 cursor-pointer transition-transform duration-200 ${
              currentIndex === thumbnailStartIndex + index ? "" : ""
            }`}
          >
            {typeof item === "string" ? (
              <div className="relative inline-block">
                <Image
                  src={item}
                  alt={`Thumbnail ${thumbnailStartIndex + index}`}
                  width={191}
                  height={271}
                  className="w-[191px] h-[271px] object-cover rounded-lg transition-transform duration-200 hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-lg"></div>
              </div>
            ) : (
              <div className="relative inline-block">
                <video
                  src={item.url}
                  width={191}
                  height={271}
                  className="w-[191px] h-[271px] object-cover rounded-lg"
                  muted
                  controls
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-lg"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSlider;

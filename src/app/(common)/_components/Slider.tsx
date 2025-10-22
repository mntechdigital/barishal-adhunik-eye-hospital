/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

interface SlideItem {
  id: number;
  image?: string;
  description?: string;
}

interface MedicalSliderProps {
  slides: SlideItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  visibleCount?: number;
}

const Slider = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  visibleCount = 3,
}: MedicalSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const safeVisibleCount = Math.min(visibleCount, slides.length);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const interval = setInterval(() => {
      handleNextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index % slides.length);
  };

  // Reset transitioning state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match this with CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, currentSlide]);

  const visibleSlides = useMemo(() => {
    const visible = [];
    for (let i = 0; i < safeVisibleCount; i++) {
      visible.push(slides[(currentSlide + i) % slides.length]);
    }
    return visible;
  }, [currentSlide, slides, safeVisibleCount]);

  return (
    <div className={`${!slides[0]?.description ? "container" : "h-"} `}>
      {/* Slider Container */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <div 
          className={`flex transition-all duration-500 ease-in-out ${
            slides[0]?.description ? "gap-4" : "gap-2"
          } ${
            isTransitioning ? "transform transition-transform" : ""
          }`}
          style={{
            transform: isTransitioning ? 'translateX(-5px)' : 'translateX(0)',
          }}
        >
          {visibleSlides.map((slide, idx) => (
            <div
              key={`${slide.id}-${idx}`}
              className={`flex-1 min-w-0 rounded-lg transition-all duration-500 ease-in-out ${
                isTransitioning ? 'opacity-90 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <div
                className={`${
                  slide?.description && "bg-white pb-5 rounded-md shadow-md"
                } transition-all duration-300`}
              >
                <Image
                  src={slide?.image || ""}
                  alt={`slide-${slide.id}`}
                  width={400}
                  height={200}
                  className={`w-full h-[10rem] object-cover mb-4 transition-all duration-300 ${
                    !slide?.description ? "rounded-md" : "rounded-t-md"
                  } ${
                    isTransitioning ? 'brightness-95' : 'brightness-100'
                  }`}
                />
                {slide?.description && (
                  <div className="min-h-28">
                    <h3 className="text-black font-bangla px-2">
                      {slide.description || ""}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-green-600"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
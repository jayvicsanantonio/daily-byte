import { useEffect, useLayoutEffect } from "react";
import CarouselProgressDots from "./CarouselProgressDots";
import CarouselAutoPlay from "./CarouselAutoPlay";
import "../styles/CarouselControls.css";

function CarouselControls({
  offset,
  timeoutIdRef,
  isAutoplay,
  images,
  currentIndex,
  setIsAutoPlay,
  setBypassAutoplay,
  setCurrentIndex,
  scrollContainerRef,
}) {
  useEffect(() => {
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current =
      isAutoplay &&
      setTimeout(() => {
        handleNext();
      }, 2000);

    () => clearTimeout(timeoutIdRef.current);
  });

  useLayoutEffect(() => {
    scrollContainerRef.current.scrollTo({
      left: currentIndex * offset,
      behavior: "smooth",
    });
  }, [scrollContainerRef, currentIndex, offset]);

  function handlePrevious() {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }

  function handleNext() {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }

  return (
    <>
      <ol className="carousel-controls" aria-label="Navigation Controls">
        <li>
          <button
            className="carousel-controls__button"
            aria-label="Previous"
            aria-description="Show previous image"
            data-direction="previous"
            onClick={handlePrevious}
          >
            &larr;
          </button>
        </li>
        <li>
          <button
            className="carousel-controls__button"
            aria-label="Next"
            aria-description="Show next image"
            data-direction="next"
            onClick={handleNext}
          >
            &rarr;
          </button>
        </li>
      </ol>
      <CarouselProgressDots
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        images={images}
      />
      <CarouselAutoPlay
        isAutoplay={isAutoplay}
        setIsAutoPlay={setIsAutoPlay}
        setBypassAutoplay={setBypassAutoplay}
      />
    </>
  );
}

export default CarouselControls;

import { useEffect, useRef } from "react";
import "../styles/CarouselControls.css";

function CarouselControls({ autoplay, images, currentIndex, setCurrentIndex }) {
  const timeoutId = useRef(null);

  useEffect(() => {
    clearTimeout(timeoutId.current);
    timeoutId.current =
      autoplay &&
      setTimeout(() => {
        handleNextImage();
      }, 2000);

    () => clearTimeout(timeoutId.current);
  });

  function handleNextImage() {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }

  function handlePreviousImage() {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }

  return (
    <div className="carousel-controls" aria-label="Carousel Controls">
      <div className="carousel-controls__navigation-control">
        <button
          aria-label="Previous"
          className="carousel-controls__previous-button"
          onClick={handlePreviousImage}
        >
          &larr;
        </button>
        <button
          aria-label="Next"
          className="carousel-controls__next-button"
          onClick={handleNextImage}
        >
          &rarr;
        </button>
      </div>
      <div className="carousel-controls__progress-dots">
        {images.map((image, index) => {
          return (
            <button
              key={index}
              className={
                index === currentIndex
                  ? "carousel-controls__progress-dot carousel-controls__progress-dot--active"
                  : "carousel-controls__progress-dot"
              }
              aria-label={image.alt}
              aria-description={`${index + 1} of ${images.length}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default CarouselControls;

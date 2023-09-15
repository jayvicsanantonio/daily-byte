import { useLayoutEffect, useState, useRef } from "react";
import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControls";
import "../styles/Carousel.css";

function Carousel({ images, autoplay = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainer = useRef(null);

  useLayoutEffect(() => {
    scrollContainer.current.scrollTo({
      left: currentIndex * 800,
      behavior: "smooth",
    });
  }, [scrollContainer, currentIndex]);

  return (
    <div className="carousel">
      <ol
        ref={scrollContainer}
        className="carousel__scroll-container"
        role="region"
        aria-label="Image Carousel"
      >
        {images.map((image, index) => {
          return <CarouselItem key={index} image={image} />;
        })}
      </ol>

      <CarouselControls
        autoplay={autoplay}
        images={images}
        scrollContainer={scrollContainer}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default Carousel;

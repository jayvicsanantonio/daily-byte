import { useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControls";
import "../styles/Carousel.css";

function Carousel({ images, height, width, autoplay = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoPlay] = useState(autoplay);
  const [bypassAutoplay, setBypassAutoplay] = useState(false);
  const scrollContainerRef = useRef();
  const timeoutIdRef = useRef(null);

  return (
    <div
      className="carousel"
      style={{ "--height": `${height}px`, "--width": `${width}px` }}
    >
      <div
        ref={scrollContainerRef}
        className="carousel__scroll-container"
        role="region"
        aria-label="Image Carousel"
        onMouseEnter={() => {
          if (bypassAutoplay) return;
          setIsAutoPlay(false);
        }}
        onMouseLeave={() => {
          if (bypassAutoplay) return;
          setIsAutoPlay(true);
        }}
      >
        <ol className="carousel__list" role="list">
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              image={image}
              height={height}
              width={width}
            />
          ))}
        </ol>
      </div>
      <CarouselControls
        offset={width}
        timeoutIdRef={timeoutIdRef}
        isAutoplay={isAutoplay}
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setIsAutoPlay={setIsAutoPlay}
        setBypassAutoplay={setBypassAutoplay}
        scrollContainerRef={scrollContainerRef}
      />
    </div>
  );
}

export default Carousel;

import "../styles/CarouselProgressDots.css";

function CarouselProgressDots({ currentIndex, setCurrentIndex, images }) {
  return (
    <div className="carousel-progress__dots">
      {images.map((image, index) => {
        return (
          <button
            aria-label={"Cat #" + (index + 1)}
            aria-description={`${index + 1} of ${images.length}`}
            role="tab"
            aria-selected={index === currentIndex}
            key={index}
            className={
              index === currentIndex
                ? "carousel-progress__dot carousel-progress__dot--active"
                : "carousel-progress__dot"
            }
            onClick={() => setCurrentIndex(index)}
          ></button>
        );
      })}
    </div>
  );
}

export default CarouselProgressDots;

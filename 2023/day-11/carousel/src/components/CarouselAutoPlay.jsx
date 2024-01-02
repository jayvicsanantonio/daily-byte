import { PlayCircle, PauseCircle } from "react-feather";
import "../styles/CarouselAutoPlay.css";

function CarouselAutoPlay({ isAutoplay, setIsAutoPlay, setBypassAutoplay }) {
  return (
    <button
      className="carousel-autoplay"
      aria-label={isAutoplay ? "Pause" : "Play"}
      onClickCapture={() => {
        setIsAutoPlay(!isAutoplay);
        setBypassAutoplay((prev) => !prev);
      }}
    >
      {isAutoplay ? <PauseCircle size={20} /> : <PlayCircle size={20} />}
    </button>
  );
}

export default CarouselAutoPlay;

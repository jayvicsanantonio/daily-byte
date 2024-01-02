import "../styles/CarouselItem.css";

function CarouselItem({ image, height, width }) {
  return (
    <li className="carousel-item">
      <img
        className="carousel-item__image"
        src={image.src}
        alt={image.alt}
        height={height}
        width={width}
      />
    </li>
  );
}

export default CarouselItem;

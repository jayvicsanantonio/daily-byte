import "../styles/CarouselItem.css";

function CarouselItem({ image }) {
  return (
    <li className="carousel-item">
      <img
        className="carousel-item__image"
        src={image.src}
        alt={image.alt}
        height={500}
        width={800}
        loading="lazy"
      />
    </li>
  );
}

export default CarouselItem;

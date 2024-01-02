// import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Image1 from "../assets/images/image-1.webp";
import Image2 from "../assets/images/image-2.webp";
import Image3 from "../assets/images/image-3.webp";
import "../styles/App.css";

const IMAGES = [
  {
    id: "abc",
    src: Image1,
    alt: "Italy",
  },
  {
    id: "efg",
    src: Image2,
    alt: "India",
  },
  {
    id: "hij",
    src: Image3,
    alt: "France",
  },
];

function App() {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   fetch("https://cataas.com/api/cats?tags=cute&skip=0&limit=10")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setImages(data);
  //     });
  // }, []);

  return (
    <div className="app">
      <Carousel images={IMAGES} height={500} width={1000} />
    </div>
  );
}

export default App;

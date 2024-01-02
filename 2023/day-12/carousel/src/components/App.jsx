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
  return (
    <div className="app">
      <Carousel images={IMAGES} />
    </div>
  );
}

export default App;

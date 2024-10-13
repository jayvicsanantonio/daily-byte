import ProgressBar from "./ProgressBar";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [progressBars, setProgressBars] = useState(Array<JSX.Element>);

  const addProgressBar = () => {
    setProgressBars((prevProgressBars) => [
      ...prevProgressBars,
      <ProgressBar key={prevProgressBars.length} />,
    ]);
  };

  return (
    <div className="container">
      <button className="addProgressBar" onClick={addProgressBar}>
        Add
      </button>
      {progressBars}
    </div>
  );
}

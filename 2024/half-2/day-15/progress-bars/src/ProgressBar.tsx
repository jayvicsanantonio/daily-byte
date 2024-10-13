import { useState, useEffect } from "react";
import "./ProgressBar.css";

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth < 100) {
          return prevWidth + 10;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${width}%` }}></div>
    </div>
  );
}

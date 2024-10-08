import { useState } from "react";
import "./App.css";

export default function App() {
  const [matrix, setMatrix] = useState<number[][]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { rows, columns } = Object.fromEntries(formData);

    const newMatrix = Array.from({ length: rows }).map((_, row) => {
      return Array.from({ length: columns }).map((_, column) =>
        column % 2 === 0 ? rows * column + (row + 1) : rows * (column + 1) - row
      );
    });

    console.log(newMatrix);
    setMatrix(newMatrix);
  };

  return (
    <div className="">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="rows">Row: </label>
          <input type="number" id="rows" name="rows" min={0} />
        </div>
        <div className="input-container">
          <label htmlFor="columns">Column: </label>
          <input type="number" id="columns" name="columns" min={0} />
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      <div className="matrix-container">
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="cell">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

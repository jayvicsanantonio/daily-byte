import { useState } from "react";
import "./App.css";

export default function App() {
  const [matrix, setMatrix] = useState<number[][]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const rows = Number(formData.get("rows"));
    const columns = Number(formData.get("columns"));

    const createMatrix = (rows: number, columns: number): number[][] => {
      return Array.from({ length: rows }, (_, row) =>
        Array.from({ length: columns }, (_, column) => {
          // For even columns: rows * column + (row + 1)
          // For odd columns: rows * (column + 1) - row
          return column % 2 === 0
            ? rows * column + (row + 1)
            : rows * (column + 1) - row;
        })
      );
    };

    const newMatrix = createMatrix(rows, columns);
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
        <button type="submit" className="submit" aria-label="Generate Table">
          Submit
        </button>
      </form>
      <div className="matrix-container">
        {matrix.length === 0 ? (
          <p>
            No matrix generated yet. Please input the number of rows and
            columns.
          </p>
        ) : (
          matrix.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="row">
              {row.map((cell, cellIndex) => (
                <div key={`cell-${rowIndex}-${cellIndex}`} className="cell">
                  {cell}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

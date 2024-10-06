import { useState } from "react";

const ONE_WAY_FLIGHT = "1";
const RETURN_FLIGHT = "2";

const flightTypes = [
  { id: ONE_WAY_FLIGHT, name: "One way flight" },
  { id: RETURN_FLIGHT, name: "Return flight" },
];

export default function App() {
  const today = new Date().toISOString().substring(0, 10);
  const [flightType, setFlightType] = useState("1");
  const [departureDate, setDepartureDate] = useState(today);
  const [returnDate, setReturnDate] = useState(today);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (flightType === ONE_WAY_FLIGHT) {
      window.alert(`You have booked a one-way flight on ${departureDate}`);
    } else if (flightType === RETURN_FLIGHT) {
      window.alert(
        `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[400px] p-4 m-auto flex flex-col gap-4"
    >
      <select
        value={flightType}
        onChange={(e) => setFlightType(e.target.value)}
        className="border-[1px] p-2 border-gray-800 rounded-md"
      >
        {flightTypes.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <input
        aria-label="Departure date"
        type="date"
        value={departureDate}
        min={today}
        onChange={(e) => setDepartureDate(e.target.value)}
        className="border-[1px] p-2 border-gray-800 rounded-md"
      />

      {flightType === "2" && (
        <input
          aria-label="Return date"
          type="date"
          value={returnDate}
          min={departureDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="border-[1px] p-2 border-gray-800 rounded-md"
        />
      )}

      <button
        type="submit"
        className="bg-amber-400 rounded-md px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}

import { useState } from "react";
import "./App.css";

const TODAY = formatDate(new Date());
const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;
const TOMORROW = formatDate(new Date(Date.now() + DAY_IN_SECONDS));

function formatDate(date) {
  return new Intl.DateTimeFormat("fr-CA").format(date, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export default function App() {
  const [flightOption, setFlightOption] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(TOMORROW);
  const [returnDate, setReturnDate] = useState(departureDate);

  return (
    <div className="flight-booker">
      <form
        className="flight-booker-form"
        onSubmit={(event) => {
          event.preventDefault();

          if (flightOption === "one-way") {
            alert(`You have booked a one-way flight on ${departureDate}`);

            return;
          }

          alert(
            `You have a booked a return flight, departing on ${departureDate} and returning on ${returnDate}`
          );
        }}
      >
        <select
          value={flightOption}
          onChange={(event) => {
            setFlightOption(event.target.value);
          }}
        >
          <option value="one-way">One-way flight</option>
          <option value="return">Return flight</option>
        </select>
        <input
          aria-label="Departure Date"
          type="date"
          value={departureDate}
          onChange={(event) => {
            setDepartureDate(event.target.value);
          }}
          min={TODAY}
        />
        {flightOption === "return" && (
          <input
            aria-label="Return Date"
            type="date"
            value={returnDate}
            onChange={(event) => {
              setReturnDate(event.target.value);
            }}
            min={departureDate}
          />
        )}
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

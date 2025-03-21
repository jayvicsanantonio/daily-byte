import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicks: {count}</button>
    </div>
  );
}

export default App;

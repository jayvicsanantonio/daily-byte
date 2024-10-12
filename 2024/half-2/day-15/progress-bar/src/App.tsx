import ProgressBar from "./ProgressBar";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <ProgressBar progress={88} />
      <ProgressBar progress={25} />
      <ProgressBar progress={12} />
    </div>
  );
}

export default App;

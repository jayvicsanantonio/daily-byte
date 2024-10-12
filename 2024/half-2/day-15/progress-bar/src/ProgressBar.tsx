import "./ProgressBar.css";

const MIN = 0;
const MAX = 100;

export default function ProgressBar({ progress }: { progress: number }) {
  const clampedValue = Math.min(Math.max(progress, MIN), MAX);

  const progressStyle = {
    width: `${clampedValue}%`,
  };

  return (
    <div className="progress">
      <div className="progress-bar" style={progressStyle}>
        <span
          className="progress-text"
          aria-valuenow={clampedValue}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
        >
          {clampedValue}%
        </span>
      </div>
    </div>
  );
}

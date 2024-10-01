import { useState } from "react";
import "./AccordionSection.css";

export default function AccordionSection({
  section: { title, contents },
}: {
  section: Record<string, string>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-section">
      <div className="accordion-header" onClick={onToggle}>
        <span className="accordion-title">{title}</span>
        <span
          className={`accordion-icon ${
            isOpen ? "accordion-icon--rotated" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{contents}</p>
        </div>
      )}
    </div>
  );
}

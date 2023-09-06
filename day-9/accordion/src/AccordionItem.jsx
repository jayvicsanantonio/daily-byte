import { useState } from "react";
import "./AccordionItem.css";

export default function AccordionItem({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className={
          isExpanded
            ? "accordion-item-title accordion-item-title--expanded"
            : "accordion-item-title"
        }
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        <span
          aria-hidden={true}
          className={
            isExpanded
              ? "accordion-icon"
              : "accordion-icon accordion-icon--rotated"
          }
        />
      </button>
      <div
        className={
          isExpanded
            ? "accordion-item-contents accordion-item-contents--expanded"
            : "accordion-item-contents"
        }
        hidden={!isExpanded}
      >
        {content}
      </div>
    </div>
  );
}

import AccordionItem from "./AccordionItem";
import "./Accordion.css";

export default function Accordion({ sections }) {
  return (
    <div className="accordion">
      {sections.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
}

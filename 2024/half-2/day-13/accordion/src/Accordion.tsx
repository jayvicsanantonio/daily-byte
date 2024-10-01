import "./Accordion.css";
import AccordionSection from "./AccordionSection";

export default function Accordion({
  sections,
}: {
  sections: Array<Record<string, string>>;
}) {
  return (
    <div className="accordion">
      {sections.map((section) => (
        <AccordionSection key={section.value} section={section} />
      ))}
    </div>
  );
}

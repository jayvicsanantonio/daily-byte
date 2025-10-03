import { useState } from 'react';

interface AccordionSection {
  value: string;
  title: string;
  contents: string;
}

interface AccordionProps {
  sections: AccordionSection[];
}

export default function Accordion({ sections }: AccordionProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set()
  );

  const toggleSection = (value: string) => {
    const newOpenSections = new Set(openSections);

    if (newOpenSections.has(value)) {
      newOpenSections.delete(value);
    } else {
      newOpenSections.add(value);
    }

    setOpenSections(newOpenSections);
  };

  return (
    <div className="accordion">
      {sections.map((section) => {
        const isOpen = openSections.has(section.value);
        return (
          <div
            key={section.value}
            className="accordion-item"
            onClick={() => {
              toggleSection(section.value);
            }}
          >
            <div className="accordion-item-title">
              {section.title}
              <div
                className={`accordion-icon ${
                  isOpen ? 'accordion-icon--rotated' : ''
                }`}
              />
            </div>
            <div className="accordion-item-contents">
              {isOpen && section.contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { useState, useCallback, useRef } from 'react';
import styles from './Accordion.module.css';

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

  // Store references to all button elements using a Map
  // Key: index, Value: HTMLButtonElement
  const buttonRefs = useRef<Map<number, HTMLButtonElement>>(new Map());

  const toggleSection = useCallback(
    (value: string) => {
      const newOpenSections = new Set(openSections);

      if (newOpenSections.has(value)) {
        newOpenSections.delete(value);
      } else {
        newOpenSections.add(value);
      }

      setOpenSections(newOpenSections);
    },
    [openSections]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
      // Get the total number of buttons from the Map
      const totalButtons = buttonRefs.current.size;

      switch (event.key) {
        case 'ArrowDown': {
          event.preventDefault();
          // Focus next button, or wrap to first
          const nextIndex = (currentIndex + 1) % totalButtons;
          buttonRefs.current.get(nextIndex)?.focus();
          break;
        }

        case 'ArrowUp': {
          event.preventDefault();
          // Focus previous button, or wrap to last
          const prevIndex =
            currentIndex === 0 ? totalButtons - 1 : currentIndex - 1;
          buttonRefs.current.get(prevIndex)?.focus();
          break;
        }

        case 'Home': {
          event.preventDefault();
          // Focus first button
          buttonRefs.current.get(0)?.focus();
          break;
        }

        case 'End': {
          event.preventDefault();
          // Focus last button
          buttonRefs.current.get(totalButtons - 1)?.focus();
          break;
        }
      }
    },
    []
  );

  // Callback ref to store button references in the Map
  const setButtonRef = useCallback((index: number) => {
    return (element: HTMLButtonElement | null) => {
      if (element) {
        buttonRefs.current.set(index, element);
      } else {
        buttonRefs.current.delete(index);
      }
    };
  }, []);

  return (
    <div className={styles.accordion}>
      {sections.map((section, index) => {
        const isOpen = openSections.has(section.value);
        return (
          <div key={section.value} className={styles.accordionItem}>
            <button
              ref={setButtonRef(index)}
              id={`accordion-button-${section.value}`}
              className={styles.accordionItemTitle}
              onClick={() => {
                toggleSection(section.value);
              }}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${section.value}`}
            >
              {section.title}
              <div
                className={`${styles.accordionIcon} ${
                  isOpen ? styles.accordionIconRotated : ''
                }`}
              />
            </button>
            <div
              id={`accordion-content-${section.value}`}
              className={`${styles.accordionItemContents} ${isOpen ? styles.open : ''}`}
              role="region"
              aria-labelledby={`accordion-button-${section.value}`}
            >
              <div>{section.contents}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

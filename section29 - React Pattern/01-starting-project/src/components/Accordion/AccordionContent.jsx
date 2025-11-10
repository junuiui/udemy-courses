import { useAccordionContext } from "./Accordion"
import { useAccordingItemContext } from "./AccordionItem";

export default function AccordionContent({ className, children }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordingItemContext();

  const isOpen = openItemId === id;

  return (
    <div
      className={ isOpen ? `${className ?? ''} open` : `${className ?? ''} close` }
    >
      { children }
    </div>
  )
}
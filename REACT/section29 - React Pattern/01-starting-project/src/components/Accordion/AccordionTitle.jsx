import { useAccordionContext } from "./Accordion"
import { useAccordingItemContext } from "./AccordionItem";

export default function AccordionTitle({ className, children }) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordingItemContext();
  return <h3 className={ className } onClick={ () => toggleItem(id) }>{ children }</h3>
}
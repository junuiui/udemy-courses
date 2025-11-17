import { createContext, useContext } from "react"

const AccordItemContext = createContext();

export function useAccordingItemContext() {
  const ctx = useContext(AccordItemContext);

  if (!ctx) {
    throw new Error('Item components Error');
  }

  
}

export default function AccordionItem({ id, className, children }) {

  return (
    <AccordItemContext.Provider value={ id }>
      <li className={ className }>
        { children }
      </li>
    </AccordItemContext.Provider>
  )
}
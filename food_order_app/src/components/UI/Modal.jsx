import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, className = '' }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const modal = dialogRef.current;
    if (!modal) return;

    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }

    // Optional cleanup if the component unmounts
    return () => {
      if (modal.open) modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

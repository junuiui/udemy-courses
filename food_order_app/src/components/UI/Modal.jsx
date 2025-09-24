import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom'

export default function Modal({ children, open, className = '' }) {

  const dialog = useRef();
  const modal = dialog.current;
  useEffect(() => {
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>, document.getElementById('modal')
  );
}
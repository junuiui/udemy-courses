import { createPortal } from 'react-dom';
import { motion } from 'framer-motion'

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{ // useful for reusing
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }} 
        initial="hidden" // allows us to set up the initial props
        animate="visible"
        exit="hidden" // ONLY this it NOT enough, has to use AnimatePresense in upper
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}

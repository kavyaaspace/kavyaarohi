import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white z-50 flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-gray-50 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 transform transition-transform duration-300 ease-in-out scale-95"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)' }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-3xl font-bold text-gray-900 pr-4">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 transition-colors duration-300 flex-shrink-0"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;

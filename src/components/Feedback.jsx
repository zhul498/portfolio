import React from 'react';

const Feedback = ({ show, onClose }) => {
  if (!show) return null;

  const handleOverlayClick = (e) => 
  {
    if (e.target === e.currentTarget) 
    {
      onClose();
    }
  };
  
  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content bg-white dark:bg-neutral-900">
        <div className="iframe-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfuEAqZaviyrnbtG6Gm0qGP66kvzfndW3x-avZPDqG3Cg29yg/viewform?embedded=true"
            title="Feedback Form"
            style={{ width: '100%', height: '100%' }}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
import React, { useState } from 'react';
import Footer from './components/Footer';
import About from './components/About';
import ReportPopup from './components/ReportPopup';

const Popup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <About />
      <Footer onOpenPopup={handleOpenPopup} />
      <ReportPopup show={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default Popup;
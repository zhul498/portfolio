import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './layout/Header.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Navigation from './layout/Navigation.jsx';
import Miscellaneous from './pages/Miscellaneous.jsx';
import Footer from './layout/Footer.jsx';
import Feedback from './components/Feedback.jsx';

const AppContent = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/miscellaneous/*" element={<Miscellaneous />} />
        </Routes>
      </main>
      <Footer onOpenPopup={handleOpenPopup} />
      <Feedback show={isPopupOpen} onClose={handleClosePopup} />

    </div>
  );
};


function App () {
  return (
      <Router>
        <AppContent />
      </Router>
  );
}

export default App;
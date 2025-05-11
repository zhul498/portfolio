import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/Header.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Navigation from './layout/Navigation.jsx';
import Experience from './pages/Experience.jsx';
import Footer from './layout/Footer.jsx';
import Feedback from './components/Feedback.jsx';
import { DarkModeProvider } from './components/DarkModeContext.jsx';
import './App.css';

const AppContent = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-neutral-900">
        <Header />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/experience/*" element={<Experience />} />
          </Routes>
        </main>
        <Footer onOpenPopup={handleOpenPopup} />
        <Feedback show={isPopupOpen} onClose={handleClosePopup} />
      </div>
    </DarkModeProvider>

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
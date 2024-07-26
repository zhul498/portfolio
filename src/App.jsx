import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './layout/Header.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Navigation from './layout/Navigation.jsx';

const AppContent = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects/*" element={<Projects />} />
        </Routes>
      </main>

    </div>
  )
}


function App () {
  return (
      <Router>
        <AppContent />
      </Router>
  );
}

export default App;
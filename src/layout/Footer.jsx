import React from 'react';
import '../../src/App.css';

const Footer = ({ onOpenPopup }) => {
  return (
    <footer>
      <div>
        <p>
          Please leave your feedback{' '}
          <button onClick={onOpenPopup} className="text-link">
            here
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
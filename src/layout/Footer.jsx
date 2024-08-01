import React from 'react';

const Footer = ({ onOpenPopup }) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 text-center z-50">
      <div className="py-4">
        <p>
          Please leave your feedback{' '}
          <button onClick={onOpenPopup} className="text-blue-500 hover:underline">
            here
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
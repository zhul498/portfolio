import React from 'react';

const Footer = ({ onOpenPopup }) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-800 py-4 z-50">
      <div className="text-center text-sm">
        Please leave your feedback{' '}
        <button onClick={onOpenPopup} className="text-blue-500 hover:underline">
          here
        </button>
      </div>
    </footer>
  );
};

export default Footer;
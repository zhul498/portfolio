import React, { useState } from 'react';
import '../../src/App.css';

const Feedback = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Leave Feedback</h2>
        <form>
          <textarea placeholder="Let me know what you think..." rows="5"></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;

// FloatingButton.js

import React, { useState } from 'react';
import './FloatingButton.css';

function FloatingButton() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="floating-button" onClick={togglePopup}>
      {showPopup && (
        <div className="popup">
          <h2>Get a Free Trial!</h2>
          <p>Sign up now and experience our cybersecurity solution for free.</p>
          {/* Add form or button to request the free trial */}
        </div>
      )}
    </div>
  );
}

export default FloatingButton;


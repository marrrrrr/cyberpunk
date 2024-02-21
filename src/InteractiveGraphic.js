// InteractiveGraphic.js

import React, { useState } from 'react';

const InteractiveGraphic = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Click Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default InteractiveGraphic;


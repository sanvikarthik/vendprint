import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PrintingOptions() {
  const [color, setColor] = useState('blackAndWhite');
  const [doubleSided, setDoubleSided] = useState(false);
  const [copies, setCopies] = useState(1);
  const navigate = useNavigate(); // Changed variable name to navigate

  const handleNext = () => {
    // Proceed to payment interface
    navigate('/payment'); // Use navigate function to navigate to the next page
  };

  return (
    <div>
      <h2>Printing Options</h2>
      <label>
        Color:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="blackAndWhite">Black & White</option>
          <option value="color">Color</option>
        </select>
      </label>
      <label>
        Double-sided:
        <input
          type="checkbox"
          checked={doubleSided}
          onChange={(e) => setDoubleSided(e.target.checked)}
        />
      </label>
      <label>
        Copies:
        <input
          type="number"
          value={copies}
          min={1}
          onChange={(e) => setCopies(e.target.value)}
        />
      </label>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PrintingOptions;

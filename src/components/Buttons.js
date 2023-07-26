import React from 'react';
import satData from './satData'; 

const Buttons = ({ filterByType, setSat, displaySats }) => {
 return (
    <div className="button-container">
      {/* Buttons 1-3 */}
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}

      {/* Button 4 */}
      <button onClick={() => setSat(satData)} data-testid="show-all-button">
        Show All Satellites
      </button>
    </div>
  );
};

export default Buttons;

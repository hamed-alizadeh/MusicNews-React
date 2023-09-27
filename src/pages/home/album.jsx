import React, { useState } from 'react';

function AlbumEntry({ image, year, eventName, description }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="album-entry">
      <img src={image} alt="Album" onClick={handleClick} />
      {showDetails && (
        <div className="album-details">
          <h3>{year}</h3>
          <h4>{eventName}</h4>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default AlbumEntry;

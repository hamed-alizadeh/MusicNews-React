import React, { useState } from 'react';

function freeTime() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <h1>Free Time Activities</h1>
      <button onClick={() => setSelectedOption(1)}>Activity 1</button>
      <button onClick={() => setSelectedOption(2)}>Activity 2</button>
      <button onClick={() => setSelectedOption(3)}>Activity 3</button>
      <button onClick={() => setSelectedOption(4)}>Activity 4</button>

      {selectedOption === 1 && (
        <p>Paragraph for Activity 1</p>
      )}
      {selectedOption === 2 && (
        <p>Paragraph for Activity 2</p>
      )}
      {selectedOption === 3 && (
        <p>Paragraph for Activity 3</p>
      )}
      {selectedOption === 4 && (
        <p>Paragraph for Activity 4</p>
      )}
    </div>
  );
}

export default freeTime;

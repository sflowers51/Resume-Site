import React, { useState } from 'react';

const Test = () => {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleCard}
        >
          {showCard ? 'Hide Card' : 'Show Card'}
        </button>
        {showCard && (
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg mt-4">
            <h1 className="text-2xl font-bold mb-4">Card Content</h1>
            <p>This is the content of the card.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
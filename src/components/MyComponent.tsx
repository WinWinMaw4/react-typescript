// MyComponent.tsx
import React from 'react';
import { useState} from 'react';

interface MyComponentProps {
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
    const [count, setCount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    const handleToggleMessage = () => {
        setShowMessage(!showMessage);
      };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
    <p className="text-xl font-bold mb-2">{message}</p>
    {showMessage && <p className="text-lg mb-4">Count is visible: {count}</p>}
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Increment Count
      </button>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleToggleMessage}
    >
      Toggle Message
    </button>
  </div>
  )
};

export default MyComponent;

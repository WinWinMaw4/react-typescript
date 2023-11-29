// MyComponent.tsx
import React from 'react';
import { useState} from 'react';

interface MyComponentProps {
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
    const [count, setCount] = useState(0);

    
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
    <p className="text-xl font-bold mb-2">{message}</p>
    <p className="text-lg mb-4">Count: {count}</p>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleButtonClick}
    >
      Increment Count
    </button>
  </div>
  )
};

export default MyComponent;

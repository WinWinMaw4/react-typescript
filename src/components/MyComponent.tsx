import React, { useState } from 'react';

interface MyComponentProps {
  messages: string[];
  setMessages: React.Dispatch<React.SetStateAction<string[]>>;
}

const MyComponent: React.FC<MyComponentProps> = ({ messages, setMessages }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleAddMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <ul>
        {messages.map((message, index) => (
          <li key={index} className="text-lg mb-2">
            {message}
          </li>
        ))}
      </ul>
      <div className="flex items-center mt-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mr-2"
        />
        <button
          onClick={handleAddMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Message
        </button>
      </div>
    </div>
  );
};

export default MyComponent;

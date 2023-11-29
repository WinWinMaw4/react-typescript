// App.tsx
import React, { useState, useEffect } from 'react';
import MyComponent from './components/MyComponent';

const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div>
      <h1>Hello from App!</h1>
      <MyComponent messages={messages} setMessages={setMessages} />
    </div>                                    
  );
};

export default App;

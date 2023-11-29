// App.tsx
import React from 'react';
import MyComponent from './components/MyComponent';

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello from App!</h1>
      <MyComponent message="Welcome to TypeScript + React!" />
    </div>
  );
};

export default App;

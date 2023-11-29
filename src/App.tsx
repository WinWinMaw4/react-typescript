// App.tsx
import React, { useState, useEffect } from 'react';
import MyComponent from './components/MyComponent';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

const App: React.FC = () => {
  const apiUrl = 'http://localhost:5000/posts';

  return (
    <div>
        
      <nav className="mb-4 bg-pink-600">
        <ul className="flex space-x-4 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>


      <Routes>
          <Route index element={<MyComponent apiUrl={apiUrl} />} />
          <Route path="about" element={<About />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      {/* <MyComponent apiUrl={apiUrl} /> */}
    </div>                                    
  );
};

export default App;

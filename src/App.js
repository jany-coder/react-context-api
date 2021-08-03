import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import { createContext } from 'react';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CategoryContext.Provider value={count}>
        <p>Count Value App: {count}</p>
        <Header count={count} setCount={setCount} />
        <Home />
        <Shipment />
      </CategoryContext.Provider>

    </div>
  );
}

export default App;

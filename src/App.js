import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import { createContext } from 'react';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <div className="App">
    <h1 style={{fontWeight:"500"}}><u>Context API Example</u></h1>
      <CategoryContext.Provider value={[category, setCategory]}>
        <p>Count Value App: {category}</p>
        <Header />
        <Home />
        <Shipment />
      </CategoryContext.Provider>

    </div>
  );
}

export default App;

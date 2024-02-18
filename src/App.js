import logo from './logo.svg';
import React, { useState }  from 'react'
// import { useState } from 'react';
import './App.css';

function App() {
  const  [count, setCount] =useState(0);
  const increment=()=>{
    setCount((prev)=>prev + 1)
  }
  return (
    <div className="App">
      <h1>Tejuuu</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;

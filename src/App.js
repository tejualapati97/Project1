import logo from './logo.svg';
import React from 'react'
import './App.css';

function App() {
  const  [count, setCount] =useState(0);
  return (
    <div className="App">
      <h1>Tejuuu</h1>
      <h2>{count}</h2>
    </div>
  );
}

export default App;

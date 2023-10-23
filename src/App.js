import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('World');
  const [titleButton, setTitleButton] = useState('change the name');
  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <button onClick={() => {
        setName('James')
        setTitleButton('another')
      }}>
        {titleButton}
      </button>
    </div>
  );
}

export default App;
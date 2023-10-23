import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('World');
  return (
    <div className="App">
      <h1>hhhhh, {name}!</h1>
      <button onClick={() => setName('James')}>
        Click me to change the name
      </button>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';

function App() {
  const [ counter, setcounter] = React.useState(0)
  return (
    <div className="App">
      <h1> This is counter app</h1>
      <button id="increment-btn" onClick={()=> counter + 1}>Increment</button>
      <div id="counter-value">{counter}</div>
    </div>
  );
}

export default App;
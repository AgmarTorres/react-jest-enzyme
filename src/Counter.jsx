import React, { Component } from 'react';

function Counter(){
    
    const [ counter, setcounter] = React.useState(0)

    return (
        <div>
            <h1> This is counter app</h1>
            <button id="increment-btn" onClick={() => setcounter(counter + 1)}>Increment</button>
            <button id="decrement-btn" onClick={() => setcounter(counter-1)}>Decrement</button>
            <div id="counter-value">{counter}</div>        
        </div>
    );
    
}

export default Counter;
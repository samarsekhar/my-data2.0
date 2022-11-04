import React, { useState } from "react";

function State () {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => setCounter(counter - 1);

    // if ( counter<=1) {
    //     decrementCounter = () => setCounter(1);
    // }

    return (
        <div>
            <h2>State Functional method</h2>
            <h3>Quantity: {counter}</h3>
            <button onClick = {incrementCounter}> + </button>
            <button onClick = {decrementCounter}> - </button>
        </div>
    )
}
export default State;


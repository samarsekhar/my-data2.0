import React, { useState } from "react";
import "../421_Hook_IncreDecre/myStyle.css";

function IncreDecre() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
        </div>
    );
}
export default IncreDecre;
import React from "react";
import { add, divide, multiply, sabtract } from "./Calculator.js";

function Main() {
    return (
        <div>
            <ul>
                <li>{add(12, 21)}</li>
                <li>{sabtract(32, 4)}</li>
                <li>{multiply(55, 4)}</li>
                <li>{divide(143, 38)}</li>
            </ul>
        </div>
    )
}

export default Main;
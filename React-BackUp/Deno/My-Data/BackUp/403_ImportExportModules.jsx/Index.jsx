import React from "react";
import Pi, { doublePi, triplePi } from "./Math.js"

function MathPi() {
    return (
        <div><h3>Math PI</h3>
            <ul>
                <li>{Pi}</li>
                <li>{doublePi()}</li>
                <li>{triplePi()}</li>
            </ul>
        </div>
    )
}
export default MathPi;
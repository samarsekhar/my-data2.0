import React from "react";
import "../422_Hooks/style.css";

function Time() {

    let time = new Date().toLocaleTimeString();
    console.log(time);

    return (
        <div className="container">
            <h1>TIME</h1>
            <button>Get Time{time}</button>
        </div>
    )
}
export default Time;
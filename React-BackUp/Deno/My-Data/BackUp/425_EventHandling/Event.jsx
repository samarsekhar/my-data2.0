import React, { useState } from "react";
import "../425_EventHandling/style.css";

function Event() {
    const [headingText, setHeadingText] = useState("Hello");
    const [isMousedOver, setIsMouseOver] = useState(false);

    const handleClick = () => {
        setHeadingText("Submitted");
        console.log("Clicked");
    }

    const handleMouseOver = () => {
        setIsMouseOver(true);
    }

    const handleMouseOut = () => {
        setIsMouseOver(false);
    }

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            <button style={{ backgroundColor: isMousedOver ? "black" : "blue" }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >Submit</button>
        </div>
    )
}
export default Event;
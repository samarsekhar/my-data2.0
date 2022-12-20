import React from "react";

const ClickHandler = () => {
    const clickHandler = (event, count = 1) => {
        console.log("Button clicked", count, event);
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            <br />
            <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
        </div>
    )
}
export default ClickHandler;
import React from "react";

const Second = (props) => {
    return (
        <div>
            <h1>Hello {props.names} also known as {props.playerDetails}</h1>
            {props.children}
        </div>
    )
}
export default Second;
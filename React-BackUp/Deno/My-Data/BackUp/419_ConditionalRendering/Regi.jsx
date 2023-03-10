import React from "react";
import Form from "./Form.jsx";

var userIsRegistered = true;

function Regi() {
    return (
        <div className="container">
            <Form isRegistered={userIsRegistered} />
        </div>
    )
}
export default Regi;
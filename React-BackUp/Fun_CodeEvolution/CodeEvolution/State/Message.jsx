import React, { useState } from "react";

const Message = () => {
    const [message, setMessage] = useState("Welcome Visitor")
    return (
        <div><h1>{message}</h1>
            <button className="btn btn-danger" onClick={() => setMessage("Thank you for subscribe!")}>
                Subscribe
            </button>
        </div>
    )
}
export default Message
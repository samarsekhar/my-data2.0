import React, { useState } from "react";

const Forms = () => {
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (event) => {
        event.preventDefault()
        alert(`The form data is ${username} ${description}`);
        console.log(username, description);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>User Name</label>
                    <input type="text" placeholder="Enter your name" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
                </div>
                <div>
                    <button className="btn btn-success" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Forms;
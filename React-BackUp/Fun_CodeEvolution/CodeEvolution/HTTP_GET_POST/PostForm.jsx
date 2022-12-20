import React, { useState } from "react";

const PostForm = () => {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const submitHandler = (event) => {
        event.submitHandler();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" value={userId} placeholder="User ID" onChange={(event) => setUserId(event.target.value)} />
                    <input type="text" value={title} placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
                    <input type="text" value={body} placeholder="Body" onChange={(event) => setBody(event.target.value)} />
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default PostForm;
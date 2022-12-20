import React, { useState, useEffect } from "react";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.id}>
                            <li>{post.id}</li>
                            <li>{post.title}</li>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default PostList;
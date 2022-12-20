import React from "react";

const UserGreeting = () => {
    const isLoggedIn = false
    return (
        <div>
            <h1>Welcome {isLoggedIn ? "Babu" : "Baby"}</h1>
            <h2>Welcome {isLoggedIn && "Baby"}</h2>
        </div>
    )
}
export default UserGreeting;
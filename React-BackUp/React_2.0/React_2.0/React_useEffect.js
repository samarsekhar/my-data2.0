/*  React useEffect Hook
 
 --> If we want to interact with the "outside world", such as using an API, we use the useEffect hook.

 --> useEffect is used to perform a side effect, which means to perform an operation that exists outside of our app that doesn't have a predictable result.

 --> The basic syntax useEffect requires a function as a first argument and an array as the second argument.


function UseEffect() {
    useEffect(() => {
        // perform side effect here
    }, []);
}

*/

/* If want to fetch data, we would se useEffect, such as in fetching and displaying a list of posts */

import React, {useEffect} from "react";

function UsingFetch() {
    const [users, setUsers] = useEffect([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }, [])

    return (
        <div>
            {
                users.length > 0 && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}
export default UsingFetch;

/*  If we need to use a value that comes from outside the effect function, it must be included in the dependencies array.

    If that value changes, the effect function will be re-exected.
*/

/*
   Example here is a bit of code that adds or removes the class "overflow-hidden" to the body element whenever the mobile menu is opened or closed.

   function Mobile({ open }) {
    useEffect(() => {
        const body = document.querySelector("#__next");
        
        if (open) {
            body.classList.add("overflow-hiddren");
        } else {
            body.classList.remove("overflow-hiddren");
        }
    }, [open])
   }
   
*/
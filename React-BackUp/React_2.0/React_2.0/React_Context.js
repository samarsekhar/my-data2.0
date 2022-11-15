/* React Context

 --> React context allows us to pass data to our component tree without using props.

 --> The problem with props is that sometimes we pass them through components that don't need to receive them. This problem is called props drilling.

 --> here is a oversimplified example of passing props through a Body component that doesn't need it:
*/

import React from "react";

function Context() {
    return (
        <Body name="Anissa" />
    );
}
function Body({ name }) {
    return (
        <Greeting name = {name} />
    );
}
function Greeting({ name }) {
    return <h1>Welcome, {name}</h1>
}
export default Context;


/* 
 Before using Context, its best to see if our components can be better organied to avoid passing through components that don't need it.
*/
/*  To useContext, use the createContext function from React.

Can call it with an initial value to be put on context.

The created context includes a 'Provider' and a 'Consumer' Property, Whixh are each components.

Wrap the Provider around the component tree that we want to pass the given value down.
place the Consumer in the component want to consume the value.

*/

import React, { createContext } from "react";

const NameContext = createContext('');

function ContextApp() {
    return (
        <NameContext.Provider value="Pooja Hegde" >
            <Body />
        </NameContext.Provider>
    );
}
function Body() {
    return <Greeting />;
}
function Greeting() {
    return (
        <NameContext.Consumer>
            {name => <h1>Hello, {name}</h1>}
        </NameContext.Consumer>
    );
}

export default ContextApp;
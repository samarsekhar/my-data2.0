/*  React useContext

  --> useContext provides an easier way of consuming context than using the standard Context.Consumer component.

  --> The syntax involves passing the entire Context object that we want to consume into useContext. The returned value is the value passed down to Context.

  import { useContext } from 'react';

  function MyComponent() {
    const value = useContext(Context);


  }

*/

// example from earlier, using the useContext hook

import React, { createContext , useContext} from "react";

const NameContext = createContext('');

function Demo() {
    return (
        <NameContext.Provider value="Anissa">
            <Body />
        </NameContext.Provider>
    );
}

function Body() {
    return <Greeting />
}

function Greeting() {
    const name = useContext(NameContext);

    return (
        <h1>Welcome, {name}</h1>
    )
}
export default Demo
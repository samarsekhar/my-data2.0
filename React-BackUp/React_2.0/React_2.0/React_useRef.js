/* React useRef 
 
 --> useRef allows us to a JSX element.
 --> To use useRef, Call it, get the returned value, and put it on the ref prop for a given React element.

 // Refs do not have a built-in prop on components, only React elements.

 syntax for useRef:

 import { useRef } from 'react';
 function MyComponent() {
    const ref = useRef();

    return <div ref={ref} />
 }

 --> Once a ref is attached to given element, we can use the value stored on ref.current to access the element itself.

*/

import React,{useWindowEvent} from "react";
import { useRef } from "react";

function Header() {
    const inputRef = useRef();

    useWindowEvent("keydown", (event) => {
        if (event.code === "KeyK" && event.ctrlKey) {
            event.preventDefault();
            inputRef.current.focus();
        }
    });

    return <input ref={inputRef} />
}
export default Header;
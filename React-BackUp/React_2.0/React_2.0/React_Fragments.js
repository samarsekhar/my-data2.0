/* React Fragments

 --> React also gives us an element called a fragment.
 --> React requires that all returned elements be returned within a single "parent" component.
 --> We can't return two sibling elements, like an h1 and a paragraph from a component.


*/

// this syntax is invalid --

// function MyComponent() {
//     return (
//             <h1>My Header</h1>
//             </p>My paragraph</p>
//     )
// }
// export default MyComponent;


// If don't want to wrap to our elements in a container elements like a div, can use a fragment.
import React from "react";

function MyComponent() {
    return (
        <>
        <h1>My Header</h1>
        <p>My Paragraph</p>
        </>
    )
}
export default MyComponent;


/**
 *  Fragments in a regular or shorthand syntax:
 *  <React.Fragment></React.Fragment> or <></>
 */
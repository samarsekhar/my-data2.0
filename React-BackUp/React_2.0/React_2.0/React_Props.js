/* React Props

 --> React components can accept data passed to them called props.
 --> Props are passed from the parent component to a child component.

*/

// Here we are passing a prop 'name' from App to 'User' component.
/* 

function App() {
    return <User name="Anissa" />
}

function User() {
    return <h1>Hello, {props.name}</h1>;  // Hello, John
}

// Props is an object, so can select the 'name' prop within 'User' to get its value.

   To embed any dynamic value (that is, a variable or expression) within JSX, you must wrap it in curly braces.

Since only using the 'name' property on the props object, we can make our simpler with object destructuring.

function App() {
    return <User name="Anissa" /> 
}

function User({name}) {
    return <h1>Hello, {name}!</h1>;      // Hello, Anissa
}

Any JavaScript value can be passed as a prop, including other elements and components.

*/
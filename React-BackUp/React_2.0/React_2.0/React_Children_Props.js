/* React Children Props

 --> Props can also be passed by placing data between the opening and closing tags of a component.
 --> Props that are passed this way are placed on the 'children' property.

*/import React from 'react'

function ChildrenProps() {
  return (
    <User>
        <h1>Hello, Anissa...</h1>
    </User>
  )
}

function User({ children }) {
    return children;
}

export default ChildrenProps
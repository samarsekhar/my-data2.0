/* React Element Styles

 --> To apply inline styles, instead of using double quotes (""), we use two sets of curly braces.
 --> inline styles are not written as plain string, but as properties objects. 

 */

import React from 'react'

const ElementStyles = () => {
  return (
    <div>
      <h1 style={{ fontSize: 24, margin: "0 auto", textAlign:"center" }}>My Elements Style</h1>
    </div>
  )
}

export default ElementStyles
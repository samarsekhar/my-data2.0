/* React Element Attributes

 --> Additionally, JSX requires a different syntax for its attributes.
 --> JSX is really JavaScript and JavaScript uses a camelcase naming convention (that is, "camelCase"), attributes are written differently than HTML.
 --> Example :
    <div className="container"></div>

*/


import React from 'react'

const ElementAttributes = () => {
  return (
    <div>
        <div className='container mt-5'>
            <h1>camelCase : <p>className="container"</p></h1>
            </div>  
    </div>
  )
}

export default ElementAttributes;
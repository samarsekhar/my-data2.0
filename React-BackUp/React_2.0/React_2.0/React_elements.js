/* React Elements

 --> React elements are written just like regular HTML elements.
 --> Valid HTML element in React.
*/
/* 
 --> JSX is really just JavaScript function(and not HTML), the syntax is a bit different.
 --> Unlike HTML, single-tag elements (Like the img elements), must be self closing. Must end in a forward slash / .


*/

import React from 'react'

const Elements = () => {
  return (
    <div>
      <h1>My Header</h1>
      <p>My Paragraph</p>
      <button>My Button</button>

      <img src='my-image.png' alt='' />
      <br />
      <hr />
    </div>
  )
}

export default Elements;


import React from 'react'

const Props2 = (props) => {
  return (
    <div>
      <h3>Component B</h3>
      <h3>Device: {props.name}</h3>
      <h4>Price: {props.price}</h4>
      <img src={props.image} />
    </div>
  )
}

export default Props2;
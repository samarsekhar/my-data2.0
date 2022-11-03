import React from 'react';
import Props2 from './Props2';

const Props = () => {
    let name = 'Redmi Note 11 pro'
    let price = '$20000.00'
    let image = 'https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._SX300_SY300_QL70_FMwebp_.jpg'
  return (
    <div>
      <h3>Component A</h3>
      <Props2 name={name} price={price} image={image} />
    </div>
  )
}

export default Props;
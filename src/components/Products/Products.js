import React from 'react';
import microzaymi from '../Products/microzaymi.png';

const Products = () => {
  return (
    <div>
        <h1>Наши продукты</h1>
        <div className='products-container'>
            <div className='products'>
                <img src={microzaymi} />

            </div>
        </div>
    </div>
  )
}

export default Products
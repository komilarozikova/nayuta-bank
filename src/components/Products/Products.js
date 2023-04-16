import React from 'react';
import microzaymi from '../Products/microzaymi.svg';
import microkredit from '../Products/microkredit.svg'
import microlizing from '../Products/microlizing.svg'
import factoring from '../Products/factoring.svg'
import '../Products/Products.scss';
import { useUserContext } from '../../context/home-context';

const Products = () => {
  const { products } = useUserContext()
  return (
    <div className='productspage'>
      <h1>Наши продукты</h1>
      <div className='products-container'>
        {
          products?.map((item, key) => (
            <div className='products'>
              <img src={item?.image} alt='' />
              <h4>{item?.title}</h4>
              <p>{item?.description} </p>
              <a href={item?.link} className='btn-products'>Подробнее</a>
            </div>
          ))
        }


      </div>

    </div>
  )
}

export default Products
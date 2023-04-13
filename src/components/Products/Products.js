import React from 'react';
import microzaymi from '../Products/microzaymi.svg';
import microkredit from '../Products/microkredit.svg'
import microlizing from '../Products/microlizing.svg'
import factoring from '../Products/factoring.svg'
import '../Products/Products.css';

const Products = () => {
  return (
    <div className='productspage'>
      <h1>Наши продукты</h1>
      <div className='products-container'>
        <div className='products'>
          <img src={microzaymi} />
          <h4>Микрозаймы</h4>
          <p>Физическим лицам до
            50 мллионов сум в срок
            до 12 месяцев  </p>
          <button className='btn-products'>Подробнее</button>
        </div>
        <div className='products'>
          <img src={microkredit} />
          <h4>Микрокредиты</h4>
          <p>Субъктам
            предпринимательства
            до 300 миллионов сум   </p>
          <button className='btn-products'>Подробнее</button>
        </div>
        <div className='products'>
          <img src={microlizing} />
          <h4>Микролизинг</h4>
          <p>Субъктам
            предпринимательства
            до 600 миллионов сум  </p>
          <button className='btn-products'>Подробнее</button>
        </div>
        <div className='products' >
          <img src={factoring} />
          <h4>Факторинг</h4>
          <p>Субъктам
            предпринимательства
            до 1 миллиарда сум  </p>
          <button
            className='btn-products'>Подробнее</button>
        </div>
      </div>

    </div>
  )
}

export default Products
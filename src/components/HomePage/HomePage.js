import React from 'react'
import '../HomePage/HomePage.css';
import creditcards from '../HomePage/creditcards.png'

const HomePage = () => {
  return (
    <section className='hero'>
      <div className='hero-container'>
      <div className='hero-text'>
            <h1>Быстрые кредиты по
                низким процентам </h1>
            <h5>Cамые низкие процентные ставки cреди микрофинансовых организаций Узбекистана.</h5>
            <a className='btn' href='#'>Подробнее</a>
        </div>
        <div className="hero-img">
           <img src={creditcards} />
        </div>
      </div>
    </section>
  )
}

export default HomePage
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './HomePage.scss';
import bank from '../HomePage/bank.svg'
import Currency from '../../components/Currency';
import Products from '../../components/Products/Products';
import Calculator from '../../components/Calculator';
import TableHome from '../../components/table';
import Trust from '../../components/Trust/Trust';
import AccordionHome from '../../components/accordion/accordion-home';

const HomePage = () => {
  return (
    <>
      <Currency />
      <div className="container load-anim">
        <section className='hero'>
          <div className='hero-container'>
            <div className='hero-text'>
              <h1>У нас выгоднее</h1>
              <h5>Cамые низкие процентные ставки cреди микрофинансовых организаций Узбекистана.</h5>
              <a href='#'>Подробнее</a>
            </div>
            <div className="hero-img">
              <img src={bank} />
            </div>
            <div className='see-more'>
              <button>Подробнее</button>
            </div>
          </div>
        </section>
        <Calculator />
        <Products />
        <TableHome />
        <Trust />
        <AccordionHome />
      </div>
    </>
  )
}

export default HomePage
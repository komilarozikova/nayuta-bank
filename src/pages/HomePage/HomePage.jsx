/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.scss';
// import bank from '../HomePage/bank.svg'
import Currency from '../../components/Currency';
import Products from '../../components/Products/Products';
import Calculator from '../../components/Calculator';
import TableHome from '../../components/table';
import Trust from '../../components/Trust/Trust';
import AccordionHome from '../../components/accordion/accordion-home';
import { useUserContext } from '../../context/home-context';

const HomePage = () => {
  const { carousels } = useUserContext()
  return (
    <>
      <Currency />
      <div className="container load-anim">
        <Carousel interval={1000}>
          {
            carousels?.map((item, key) => (
              <Carousel.Item>
                <section className='hero'>
                  <div className='hero-container'>
                    <div className='hero-text'>
                      <h1>{item?.title}</h1>
                      <h5>{item?.descriptions}</h5>
                      <div className='see-more'>
                        <a href={item?.link}>Подробнее</a>
                      </div>
                    </div>
                    <div className="hero-img">
                      <img src={item?.image} alt='' />
                    </div>

                  </div>
                </section>
              </Carousel.Item>
            ))
          }
        </Carousel>

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
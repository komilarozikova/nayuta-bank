import React from 'react'
import '../About/About.css'
import nayutabank from '../About/nayutabank.svg'

const About = () => {
  return (
    <section className='about'>
    <div className='about-container'>
    <h1>Почему лучше обратиться к нам, а не в банк? </h1>
    <div className='about-text'>
          <p>Ваше время для нас в приоритете, поэтому в отличие от банка, мы оперативно обрабатываем запросы и предложим тот финансовый ключ, который нужен именно вам.</p>
          <a className='about-btn' href='#'>Подробнее</a>
      </div>
      <div className="about-img">
         <img src={nayutabank} />

      </div>
    </div>
  </section>
  )
}

export default About
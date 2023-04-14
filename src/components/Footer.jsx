import React from 'react';
import './Footer.scss';
import logo from '../img/nayuta.svg';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id='contact' className='footer-container'>
      <section className='footer-subscription'>
        <img className='footer-subscription-heading'
          src={logo}
          alt=''
        />
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/'>О компании</Link>
            <Link to='/'>Услуги:</Link>
            <Link to='/' className='greylink'>Физическим лицам</Link>
            <Link to='/' className='greylink'>Юридическим лицам</Link>
            <Link to='/'>Консультация</Link>
          </div>
          <div id='child2' className='footer-link-items'>
            <Link to='/'>
              Контакты:
            </Link>
            <Link to='/'>
              <i class="fa-solid fa-phone" id='icons'></i>
              +998 78 150 33 32
            </Link>
            <Link to='/'>
              <i class="fab fa-instagram" id='icons' />
              instagram
            </Link>
            <Link to='/'>
              <i class="fa-regular fa-envelope" id='icons'></i>
              info@nayuta.uz
            </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div id='child3' className='footer-link-items'>
            <Link to='/'>Режим работы:</Link>
            <Link to='/'>Пн-Пт: 9:00 – 18:00</Link>
            <Link to='/'>Сб: 10:00 – 17:00</Link>
            <Link to='/'>Вс – выходной</Link>
          </div>
          <div className='footer-link-items'>
            <Link to='/' className='addresslink'>Адрес:</Link>
            <Link to='/' className='address'>Республика Узбекистан, Ташкент,
              <br />
              Мирабадский район, Нукусская улица, <br />
              дом 29, 100015</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>© Все права защищены 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
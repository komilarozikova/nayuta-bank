import React from 'react';
import './Footer.css';
import logo from '../img/nayuta.svg';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <img className='footer-subscription-heading'
          src={logo}
        />
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/'>О компании</Link>
            <Link to='/'>Услуги:</Link>
            <Link to='/'>Физическим лицам</Link>
            <Link to='/'>Юридическим лицам</Link>
            <Link to='/'>Консультация</Link>
          </div>
          <div class='footer-link-items'>
            <Link to='/'>Контакты:</Link>
            <Link to='/'>+998 78 150 33 32</Link>
            <Link to='/'>instagram</Link>
            <Link to='/'>info@nayuta.uz</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/'>Режим работы:</Link>
            <Link to='/'>Пн-Пт: 9:00 – 18:00</Link>
            <Link to='/'>Сб: 10:00 – 17:00</Link>
            <Link to='/'>Вс – выходной</Link>
          </div>
          <div class='footer-link-items'>
            <Link to='/'>Адрес:</Link>
            <Link to='/' className='address'>Республика Узбекистан, Ташкент, 
              <br/>
            Мирабадский район, Нукусская улица, <br/>
            дом 29, 100015</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small className='website-rights'>© Все права защищены 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
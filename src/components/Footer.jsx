import React from 'react';
import './Footer.scss';
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
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/'>О компании</Link>
            <Link to='/'>Услуги:</Link>
            <Link to='/'>Физическим лицам</Link>
            <Link to='/'>Юридическим лицам</Link>
            <Link to='/'>Консультация</Link>
          </div>
          <div id='child2' className='footer-link-items'>
            <Link to='/'>Контакты:</Link>
            <Link to='/'>+998 78 150 33 32</Link>
            <Link to='/'>instagram</Link>
            <Link to='/'>info@nayuta.uz</Link>
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
              <br/>
            Мирабадский район, Нукусская улица, <br/>
            дом 29, 100015</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>© Все права защищены 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
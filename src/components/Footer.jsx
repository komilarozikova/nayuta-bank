import React from 'react';
import './Footer.scss';
import logo from '../img/nayuta.svg';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Copyr from './cop.svg'


function Footer() {
  const { t } = useTranslation();
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
            <Link to='/'>{t("footer.left1")}</Link>
            <Link to='/'>{t("footer.left2")}</Link>
            <Link to='/physical' className='greylink'>{t("footer.left3")}</Link>
            <Link to='/yuridik' className='greylink'>{t("footer.left4")}</Link>
          </div>
          <div id='child2' className='footer-link-items'>
            <Link to='/'>
              {t("footer.left6")}
            </Link>
            <a href='tel:+998781503332'>
              <i class="fa-solid fa-phone" id='icons'></i>
              +998 78 150 33 32
            </a>
            <Link to='https://instagram.com/nayuta.uz?igshid=MTIyMzRjYmRlZg==' target='_blank'>
              <i class="fab fa-instagram" id='icons' />
              instagram
            </Link>
            <Link to='javascript:void(0)'
              onClick={() => window.location = 'mailto: info@nayuta.uz'}>
              <i class="fa-regular fa-envelope" id='icons'></i>
              info@nayuta.uz
            </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div id='child3' className='footer-link-items'>
            <Link to='/'>{t("footer.left7")}</Link>
            <Link to='/'>Пн-Пт: 9:00 – 18:00</Link>
            <Link to='/'>Сб: 10:00 – 17:00</Link>
            <Link to='/'>Вс – выходной</Link>
          </div>
          <div className='footer-link-items'>
            <Link to='/' className='addresslink'>{t("footer.left8")}</Link>
            <Link to='https://yandex.uz/maps/10335/tashkent/house/YkAYdA9iS0YDQFprfX54cnVjYA==/?ll=69.282234%2C41.293904&z=16' target='_blank' className='address'>

              {t("footer.left9")}
              <br />
              {t("footer.left10")}
            </Link>
            <br />
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'><img src={Copyr} alt="" /> {t("prava.title")}</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
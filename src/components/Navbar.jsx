import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import './Navbar.scss'
import { useState } from 'react'
import Consultaion from './Consultation/Consultaion'
import Hamburger from '../assets/images/Menu.svg'
import { useUserContext } from '../context/home-context'
import ru from '../assets/images/ru.svg'
import uz from '../assets/images/uz.svg'

const Navbar = () => {
  const [active, setActive] = useState(true)
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="navbar">
        <div className="navbar-inner container">
          <div className="hamburger">
            <button style={{
              background: "transparent",
              border: "none",
              outline: "none"
            }}
              onClick={() => setActive(!active)}
            >
              <img src={Hamburger} alt="" />
            </button>
          </div>
          <div className="logo">
            <Link to='/'><img src={Logo} alt="" /></Link>
          </div>
          <div className={active ? "links" : "links hide"}>
            <Link to='/'>Главная</Link>
            <Link className='uslugi-hover' to='/'>Услуги
              <div className='uslugi'>
                <Link to='/physical' className='physicalh'>Физическим лицам</Link>
                <Link to='/yuridik' className='yuridikh'>Юридическим лицам</Link>
              </div>
            </Link>
            <Link to='/company'>Компания</Link>
            <Link to='/consultation'>Консультация</Link>
            <a href='#contact' className='contacts' >Контакты</a>
            <input type="checkbox" checked />
            <label id='langs' for="coding">RU</label>
            <input type="checkbox" />
            <label id='langs' for="music">/ UZ</label>

          </div>
          <div className={active ? "links-hide" : "links-hide active"}>
            <Link onClick={() => setActive(!active)} className='navbar-link' to='/'>Главная</Link>
            <button style={{
              borderBottom: show ? "none" : "1px solid #628fd8"
            }} onClick={() => setShow(!show)} className='navbar-link'>Услуги</button>
            <Link style={{
              display: show ? "block" : "none",
              borderBottom: !show ? "none" : "1px solid #628fd8"
            }} className='navbar-link active' onClick={() => setActive(!active)} to='/yuridik'>Юридическим лицам</Link>
            <Link style={{
              display: show ? "block" : "none",
              borderBottom: !show ? "none" : "1px solid #628fd8"
            }} className='navbar-link active' onClick={() => setActive(!active)} to='/physical' >Физическим лицам</Link>
            <Link className='navbar-link' onClick={() => setActive(!active)} to='/company'>Компания</Link>
            <Link className='navbar-link' onClick={() => setActive(!active)} to='/consultation'>Консультация</Link>
            <a href='#contact' className='navbar-link' onClick={() => setActive(!active)} to='/'>Контакты</a>
          </div>

          <div className="lang-container">
            <input type="checkbox" checked />
            <label id='langs' className='langru' for="coding">RU</label>
            <input type="checkbox" />
            <label id='langs' className='languz' for="music">/ UZ</label>
          </div>
          {/* <div className="lang-menu">
                <div className="selected-lang">
                  RU/UZ
                </div>
                <ul>
                  <li className='langli'>
                    <a href="" className='ru'>Русский</a>
                  </li>
                  <li className='langli'>
                    <a href="" className='uz'>O'zbekcha</a>
                  </li>
                </ul>
              </div> */}
          {/* 
          <ul>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle">RU/UZ</a>
              <ul class="dropdown-menu">
                <li><a href="#"><img src={ru}/>Русский</a></li>
                <li><a href="#"><img src={uz}/>O'zbekcha</a></li>
              </ul>
            </li>
          </ul> */}
        </div>
      </div>

    </>
  )
}
export default Navbar
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import './Navbar.scss'
import { useState } from 'react'
import Consultaion from './Consultation/Consultaion'
import Hamburger from '../assets/images/Menu.svg'
import { useUserContext } from '../context/home-context'
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
                <Link to='/physical'>Физическим лицам</Link>
                <Link to='/yuridik'>Юридическим лицам</Link>
              </div>
            </Link>
            <Link to='/company'>Компания</Link>
            <Link to='/consultation'>Консультация</Link>
            <Link to='/'>Контакты</Link>
            <select>
              <option value="ru/uz">Ру / Uz</option>
            </select>
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
            }} className='navbar-link active' to='/physical' target='_blank'>Физическим лицам</Link>
            <Link className='navbar-link' onClick={() => setActive(!active)} to='/company'>Компания</Link>
            <Link className='navbar-link' onClick={() => setActive(!active)} to='/consultation'>Консультация</Link>
            <Link className='navbar-link' onClick={() => setActive(!active)} to='/'>Контакты</Link>
          </div>
          <select className='lang-hide'>
            <option value="ru/uz">Ру / Uz</option>
          </select>
        </div>
      </div>

    </>
  )
}
export default Navbar
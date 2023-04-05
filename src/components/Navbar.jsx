import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import './Navbar.scss'
import { useState } from 'react'
import Consultaion from './Consultation/Consultaion'
import Hamburger from '../assets/images/Menu.svg'
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
            <Link><img src={Logo} alt="" /></Link>
          </div>
          <div className={active ? "links" : "links hide"}>
            <Link to='/'>Главная</Link>
            <Link to='/'>Услуги</Link>
            <Link to='/' target="_blank">Компания</Link>
            <Link to='/consultation'>Консультация</Link>
            <Link to='/'>Контакты</Link>
            <select>
              <option value="ru/uz">Ру / Uz</option>
            </select>
          </div>
          <div className={active ? "links-hide" : "links-hide active"}>
            <Link className='navbar-link' to='/'>Главная</Link>
            <button style={{
              borderBottom: show ? "none" : "1px solid #628fd8"
            }} onClick={() => setShow(!show)} className='navbar-link'>Услуги</button>
            <Link style={{
              display: show ? "block" : "none",
              borderBottom: !show ? "none" : "1px solid #628fd8"
            }} className='navbar-link active' to='/'>Юридическим лицам</Link>
             <Link style={{
              display: show ? "block" : "none",
              borderBottom: !show ? "none" : "1px solid #628fd8"
            }} className='navbar-link active' to='/physical' target='_blank'>Физическим лицам</Link>
            <Link className='navbar-link' to='/'>Компания</Link>
            <Link className='navbar-link' to='/consultation'>Консультация</Link>
            <Link className='navbar-link' to='/'>Контакты</Link>
          </div>
          <select>
            <option value="ru/uz">Ру / Uz</option>
          </select>
        </div>
      </div>

    </>
  )
}
export default Navbar
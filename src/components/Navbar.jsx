import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import './Navbar.scss'
import { useEffect, useState } from 'react'
import Hamburger from '../assets/images/Menu.svg'
import { useUserContext } from './context/home-context'

const Navbar = () => {
  const [active, setActive] = useState(true)
  const [show, setShow] = useState(false)
  const pathname = window.location.pathname
  const navigate = useNavigate()
  const { lang, setLang } = useUserContext()
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  return (
    <>
      <div className="navbar-header">
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
            <Link onClick={window.scrollTo(0, 0)} to='/'><img src={Logo} alt="" /></Link>
          </div>
          <div className={active ? "links" : "links hide"}>
            <button to='/' onClick={() => navigate('/')} className={pathname === '/' ? 'active' : ''} >Главная</button>
            <button className={pathname === '/uslugi' ? 'uslugi-hover active' : 'uslugi-hover'} to='/uslugi'>Услуги
              <div className='uslugi'>
                <button to='/physical' onClick={() => navigate('/physical')} className={pathname === '/physical' ? 'uslugulink' : 'uslugulink'}>Физическим лицам</button>
                <button to='/yuridik' onClick={() => navigate('/yuridik')} className={pathname === '/yuridik' ? 'uslugulink' : 'uslugulink'}>Юридическим лицам</button>
              </div>
            </button>
            <button onClick={() => {
              navigate('/company')
              window.scrollTo(0, 0)
            }
            } className={pathname === '/company' ? 'active' : ''} >Компания</button>
            <button onClick={() => {
              navigate('/consultation')
              window.scrollTo(0, 0)
            }
            } className={pathname === '/consultation' ? 'active' : ''}>Консультация</button>
            <a href='#contact' className={window.location.hash === '#contact' ? 'active' : ''} >Контакты</a>
            <button onClick={() => setLang("ru")} className={lang === 'ru' ? 'lang-btn active' : 'lang-btn'} style={{
              marginRight: "10px"
            }}>RU</button>
            <button onClick={() => setLang("uz")} className={lang === 'uz' ? 'lang-btn active' : 'lang-btn'}>/ UZ</button>
          </div>
          <div className={active ? "links-hide" : "links-hide active"}>
            <Link onClick={() => {
              setActive(!active)
              window.scrollTo(0, 0)
            }
            } className='navbar-link' to='/'>Главная</Link>
            <button style={{
              borderBottom: show ? "none" : "1px solid #628fd8"
            }} onClick={() => setShow(!show)} className='navbar-link'>Услуги</button>
            <Link style={{
              display: show ? "block" : "none",
              borderBottom: !show ? "none" : "1px solid #628fd8"
            }} className='navbar-link active' onClick={() => {
              setActive(!active)
              window.scrollTo(0, 0)
            }
            } to='/yuridik'>Юридическим лицам</Link>
            <Link style={{
              display: show ? "block" : "none",
              borderBottom: !show ? "none" : "1px solid #628fd8"
            }} className='navbar-link active' onClick={() => {
              setActive(!active)
              window.scrollTo(0, 0)
            }
            } to='/physical' >Физическим лицам</Link>
            <Link className='navbar-link' onClick={() => {
              setActive(!active)
              window.scrollTo(0, 0)
            }
            } to='/company'>Компания</Link>
            <Link className='navbar-link' onClick={() => {
              setActive(!active)
              window.scrollTo(0, 0)
            }
            } to='/consultation'>Консультация</Link>
            <a href='#contact' className='navbar-link' onClick={() => setActive(!active)} to='/'>Контакты</a>
          </div>
          <div className="lang-container">
            <button onClick={() => setLang("ru")} className={lang === 'ru' ? 'lang-btn active' : 'lang-btn'} style={{
              marginRight: "10px"
            }}>RU</button>
            <button onClick={() => setLang("uz")} className={lang === 'uz' ? 'lang-btn active' : 'lang-btn'}>/ UZ</button>
          </div>
        </div>
      </div>

    </>
  )
}
export default Navbar
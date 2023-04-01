import React, {Component,  useState, useEffect } from 'react'; 
import logo from '../img/nayuta.svg';
import { Button } from './Button'; 
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 
import { MenuItems } from './MenuItems';

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked })
  }

  render() {
    return(
      <nav className='NavbarItems'>
        <img className='navbar-logo' src={logo} />
        <div className="menu-icon" onClick={this.handleClick
        }>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar;


 
// function Navbar() { 
//   const [click, setClick] = useState(false); 
//   const [button, setButton] = useState(true); 
 
//   const handleClick = () => setClick(!click); 
//   const closeMobileMenu = () => setClick(false); 
 
//   const showButton = () => { 
//     if (window.innerWidth <= 960) { 
//       setButton(false); 
//     } else { 
//       setButton(true); 
//     } 
//   }; 
 
//   useEffect(() => { 
//     showButton(); 
//   }, []); 
 
//   window.addEventListener('resize', showButton); 
 
//   return ( 
//     <> 
//       <nav className='navbar'> 
//         <div className='navbar-container'> 
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}  > 
//           <img src={logo} />
//           </Link> 
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
//             <li className='nav-item'> 
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
//                 Главная 
//               </Link> 
//             </li> 
//             <li className='nav-item'> 
//               <Link 
//                 to='/services' 
//                 className='nav-links' 
//                 onClick={closeMobileMenu} 
//               > 
//                 Услуги 
//               </Link> 
//             </li> 
//             <li className='nav-item'> 
//               <Link 
//                 to='/products' 
//                 className='nav-links' 
//                 onClick={closeMobileMenu} 
//               > 
//                 Компания 
//               </Link> 
//             </li> 
//             <li className='nav-item'> 
//               <Link 
//                 to='/products' 
//                 className='nav-links' 
//                 onClick={closeMobileMenu} 
//               > 
//                 Консультация 
//               </Link> 
//             </li> 
 
//             <li> 
//               <Link 
//                 to='/sign-up' 
//                 className='nav-links-mobile' 
//                 onClick={closeMobileMenu} 
//               > 
//                 Контакты 
//               </Link> 
//             </li> 
//           </ul> 
//           {button && <Button buttonStyle='btn--outline'>Контакты</Button>} 

//           <p className='lang'>Ру/Uz</p>
//         </div> 

//       </nav> 
//     </> 
//   ); 
// } 
 
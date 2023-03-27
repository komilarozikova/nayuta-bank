import React from 'react'; 
import usa from '../img/flagusa.png'
import europe from '../img/flageurope.png'
import russia from '../img/flagrussia.png'
import japan from '../img/flagjapan.png'
import './Currency.css'; 
 
function Navbar() { 
 
  return ( 
    <div className='currency'>
        <div className='currencyContainer'> 
           <div className='flags'>
               <img src={usa} />
             <p>  1 USD = 11 340 UZS </p>
           </div>
           <div className='flags'>
               <img src={europe} />
             <p>  1 EUR = 12 186 UZS </p>
           </div>
           <div className='flags'>
               <img src={russia} />
              <p> 1 RUB = 151 UZS </p>
           </div>
           <div className='flags'>
               <img src={japan} />
              <p> 1 YEN = 151 UZS </p>
           </div>
        </div> 
    </div>
    
  ); 
} 
 
export default Navbar;

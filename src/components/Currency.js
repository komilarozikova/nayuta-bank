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
           <div className='usa'>
               <img src={usa} />
            1 USD = 11 340 UZS
           </div>
           <div className='europe'>
               <img src={europe} />
               1 EUR = 12 186 UZS
           </div>
           <div className='russia'>
               <img src={russia} />
               1 RUB = 151 UZS
           </div>
           <div className='japan'>
               <img src={japan} />
               1 RUB = 151 UZS
           </div>
        </div> 
    </div>
    
  ); 
} 
 
export default Navbar;

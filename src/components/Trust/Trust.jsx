import React from 'react'
import '../Trust/Trust.css'
import approval from '../Trust/approval.svg'
import thumbup from '../Trust/thumbup.svg'

const Trust = () => {
  return (
    <section className='trust'>
    <div className='trust-container'>
    <div className='trust-text'>
    <h1>Нам можно доверять </h1>
          <p>Мы работаем согласно действующему законодательству
Республики Узбекистан, имеем «Свидетельство о регистрации»
и входим в реестр микрофинансовых организаций
Центрального Банка РУз <a className='license' href='https://cbu.uz/upload/licen/mmt/97_nayuta.jpg'>( Лицензия №97 )</a>.</p>
<h5>Остались вопросы?</h5>
<p className='text2'>Позвоните нам и получите бесплатную
консультацию от наших специалистов.</p>
          <a className='trust-btn' href='#'>Позвонить</a>
      </div>
     <div className='trust-img'>
      
      <img className='approval' src={approval} />
      <img className='thumbup' src={thumbup} />
     </div>
    </div>
  </section>
  )
}

export default Trust
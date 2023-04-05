import React from 'react'
import hand from '../Physical/hand.svg'
import '../Physical/Physical.scss'

const Physical = () => {
  return (
    <div className='physical'>
       <div className="physical-container">
<div className="physical-left">
  <h1>Физическим лицам</h1>
  <p>Потребительский кредит – это кредит наличными, который выдаютфизическим лицам для крупных покупок, оплаты услуг или путешествий.</p>
  <h1>Кто может получить кредит ?</h1>
  <ul>
    <li>Лица старше 24-х лет;</li>
    <li>проживающие в Ташкенте и Ташкентской области;</li>
    <li>официально трудоустроенные (со справкой о доходах).</li>
  </ul>
  <h1>Какие нужны документы?</h1>
  <ul>
    <li>Паспорт или ID-карта;</li>
    <li>Официальное трудоустройство, справка о доходах;</li>
    <li>Заявка на получения микрокредита (заполняется в офисе);</li>
    <li>Для кредитов с залогом – документы на залоговое обеспечение, в т.ч. отчёт об оценке и страховой полис.</li>
  </ul>
</div>
<div className="physical-right">
<img className='physical-img' src={hand} alt="" />
</div>
       </div>
    </div>
  )
}

export default Physical
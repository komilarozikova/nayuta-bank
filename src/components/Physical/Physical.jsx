import React from 'react'
import hand from '../Physical/hand.svg'
import twentytwo from '../Physical/twentytwo.svg'
import thirtyeight from '../Physical/thirtyeight.svg'
import fourtyseven from '../Physical/fourtyseven.svg'
import fourtynine from '../Physical/fourtynine.svg'
import '../Physical/Physical.scss'

const Physical = () => {
  return (
    <div className='physical container load-anim'>
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
      <div className="physical-container2">
        <div className="box">
          <div className="box-container">
            <h3>Автокредит до 50 млн сум на 36
              месяцев</h3>
            <p>Вам не обязательно откладывать «до завтра» то, что с нами можно приобрести уже сейчас</p>
            <div className="sale">
              <p>от</p>
              <img src={twentytwo} alt="" />
              <p>до</p>
              <img src={thirtyeight} alt="" />
              <p>в год</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-container">
            <h3>Микрозайм нецелевой до 5 млн сум 12 месяцев</h3>
            <p>Для решения неотложных финансовых вопросов</p>
            <div className="sale">
              <p>от</p>
              <img src={fourtyseven} alt="" />
              <p>до</p>
              <img src={fourtynine} alt="" />
              <p>в год</p>
            </div>
          </div>
        </div>

      </div>
      <div className="box3 container">
        <div className="box-container2">
          <h3>Микрозайм нецелевой до 5 млн сум 12 месяцев</h3>
          <p>Для решения неотложных финансовых вопросов</p>
          <div className="sale">
            <p>от</p>
            <img src={fourtyseven} alt="" />
            <p>до</p>
            <img src={fourtynine} alt="" />
            <p>в год</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Physical
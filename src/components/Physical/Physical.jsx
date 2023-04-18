import React from 'react'
import hand from '../Physical/hand.svg'
import '../Physical/Physical.scss'
import { useUserContext } from '.././context/home-context'

const Physical = () => {
  const { individualcreditType, individualcredit, whosecredit } = useUserContext()
  return (
    <div className='physicalload-anim'>
      <div className="physical-container  ">
        <div className="physical-left container">
          <h1 className='physicalh'>Физическим лицам</h1>
          <p className='physicalp' >Потребительский кредит – это кредит наличными, который выдаютфизическим лицам для крупных покупок, оплаты услуг или путешествий.</p>
          {
            whosecredit?.map((item, key) => (
              <div key={key}>
                <h1 className='physicalh'>{item?.title}</h1>
                <ul>
                  <li>{item?.subtitle}</li>
                </ul>
              </div>
            ))
          }

          {
            individualcredit?.map((item, key) => (
              <div key={key}>
                <h1 className='physicalh' >{item?.title}</h1>
                <ul>
                  <li>{item?.subtitle}</li>
                </ul>
              </div>
            ))
          }
        </div>
        <div className="physical-right">
          <img className='physical-img' src={hand} alt="" />
        </div>
      </div>
      <div className="physical-container2 container">
        {
          individualcreditType?.map((item, key) => (
            <div className="box">
              <div className="box-container">
                <h3>{item?.title}</h3>
                <p>{item?.description}</p>
                <div className="sale">
                  <p>от</p>
                  <img src={item?.first_image} alt="" />
                  <p>до</p>
                  <img src={item?.second_image} alt="" />
                  <p>в год</p>
                </div>
              </div>
            </div>
          ))
        }



      </div>
      {/* <div className="box3 container">
        <div className="box-container2">
          <h3>Микрозайм целевой до 30 млн сум на 36 месяцев</h3>
          <p > Поможем осуществить ваши цели. Микрозайм для путешествий, оплаты учёбы или на приобретение техники</p>
          <div className="sale2">
            <p>от</p>
            <img src={fourtyfive} alt="" />
            <p>до</p>
            <img src={fourtynine} alt="" />
            <p>в год</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Physical
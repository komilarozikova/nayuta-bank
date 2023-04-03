import React from 'react'
import '../Consultation/Consultation.scss'
import consultation from '../Consultation/consultation.svg'

const Consultaion = () => {
  return (
    <div className='consultation'>
        <div className="consultation-container">
            <div className="consultation-left">
<h1>Мы проконсультируем и подберём вам самую удобную микрофинансовую услугу бесплатно</h1>
<p>Вам нужна консультация, если:
· Вы ищете профессиональное решение ваших финансовых вопросов;
· Вы не можете определиться, какая конкретно услуга или продукт вам нужны;
· Вы сомневаетесь, к кому лучше обратиться.</p>
<p >Получите бесплатную консультацию от наших специалистов</p>
<a className='consultation-btn' href='#'>Позвонить</a>
            </div>
            <div className="consulatation-right">
            <img className='consultation-img' src={consultation}
            alt="consultation" />
            </div>
        </div>
    </div>
  )
}

export default Consultaion
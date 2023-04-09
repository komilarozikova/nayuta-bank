import './yuridik.scss'
import YuridikImg from '../../assets/images/yuridik.png'
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import fourtyseven from '../../components/Physical/fourtyseven.svg'
import fourtynine from '../../components/Physical/fourtynine.svg'
import twentytwo from '../../components/Physical/twentytwo.svg'
import thirtyeight from '../../components/Physical/thirtyeight.svg'



const Yuridik = () => {
    return (
        <div className='container yuridik load-anim'>
            <div className="yuridik-banner">
                <div className="banner-title">
                    <h2>Юридическим лицам</h2>
                    <p>Кредиты юредических лиц позволяют увелечить финансовые показатели бизнеса или поддержать его в стабильном финансовом положении, продотвращая кассовые разрывы бизнеса.</p>
                    <p>Узнайте больше о наших предложениях для бизнеса ниже.</p>
                </div>
                <div className="banner-img">
                    <img src={YuridikImg} alt="" />
                </div>
            </div>
            <div className="accordions">
                <Accordion defaultActiveKey="0">
                    <div className="grid-accordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h2>Автокредит до 300 млн сум
                                    на 36 месяцев</h2>
                                <p>Вы – субъект предпринимательства или самозанятое лицо? Действуйте увереннее с нашей поддержкой!</p>
                            </Accordion.Header>
                            <Accordion.Body>
                            <h4>Какие нужны документы?</h4>
                            <ul>
                                <li> Паспорт или ID-карта;</li>
                               <li>Официальное трудоустройство, справка о доходах;</li>
<li>Заявка на получения микрокредита (заполняется в офисе);</li>
<li>Для кредитов с залогом – документы на залоговое обеспечение, в т.ч. </li>
<li>отчёт об оценке и страховой полис.</li>
                            </ul>
                            <div className="sale">
            <p>от</p>
            <img src={fourtyseven} alt="" />
            <p>до</p>
            <img src={fourtynine} alt="" />
            <p>в год</p>
                            
</div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h2>Микролизинг до 600 млн сум
                                    на 60 месяцев</h2>
                                <p className='mb-4'>Для роста вашего бизнеса</p>
                                <Link style={{
                                    float: "left"
                                }} href="/">Что мы предлагаем?</Link>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Лизинг на приобретение 
                  автомобиля с первичного рынка</li>
                  <li>Лизинг на специальную технику для 
      собственных нужд</li>
      <li>Лизинг на оборудование</li>
                                </ul>

<h4>Какие нужны документы?</h4>
<ul>
<li>Устав, учредительный договор, Протокол согласия учредителей</li>
<li>Документы, подтверждающие финансовое состояние организации</li>
<li>Бизнес-план проекта (при необходимости) </li>
<li>Образцы подписей</li>
<li>Паспорт, ИНН, копия приказа о назначении директора и главного бухгалтера</li>
<li>Залоговое обеспечение (автотранспорт, недвижимость – нежилой фонд)</li>
<li>Документация на залоговое обеспечение, в т.ч. отчёт об оценке и страховой полис</li>
<li>Справка с ГНИ об отсутствии задолженности </li>
<li>Договор об открытии счета с банком </li>
<li>Справка с банка о состоянии счетов, наличии картотек и оборотах по расчётным счетам </li>
   
</ul>
<div className="sale">
            <p>от</p>
            <img src={fourtyseven} alt="" />
            <p>до</p>
            <img src={fourtynine} alt="" />
            <p>в год</p>
                            
</div>
<h6 className='greyp'>По финансовому состоянию клиента сумма может превышать 300 млн сум.</h6>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <Accordion.Item className='last' eventKey="2">
                        <Accordion.Header>
                            <h2>Факторинг</h2>
                            <p className='mb-5'>Масштабируйте бизнес уже сегодня!</p>
                            <p>Факторинг (или финансирование дебиторской задолженности) – это сделка, в которой микрофинансовая организация погашает долг своего клиента перед компаниями.Такая услуга выгодна любому бизнесу, чтобы не просто остаться на плаву, но и расширять его.Обязательным условием оказания факторинговых услуг является отсутствие просроченной кредиторской задолженности у плательщика.</p>
                        </Accordion.Header>
                        <Accordion.Body>
                            <h1 >Выделяем 1 000 000 000 сум на срок до 36 месяцев</h1>

<h5>Что для этого нужно?</h5>
<ul>
<li>Устав, учредительный договор, Протокол согласия учредителей</li>
<li>Документы, подтверждающие финансовое состояние организации</li>
<li>Копия договора, подлежащего факторингу</li>
<li>Образцы подписей</li>
<li>Паспорт, ИНН, копия приказа о назначении директора и главного бухгалтера </li>
<li>Залоговое обеспечение (автотранспорт, недвижимость – нежилой фонд)</li>
<li>Документация на залоговое обеспечение, в т.ч. отчёт об оценке и страховой полис</li>
<li>Справка с ГНИ об отсутствии задолженности </li>
<li>Договор об открытии счета с банком </li>
<li>Справка с банка о состоянии счетов, наличии картотек и оборотах по расчётным счетам </li>
   
</ul>

<div className="sale">
            <p>от</p>
            <img src={fourtyseven} alt="" />
            <p>до</p>
            <img src={fourtynine} alt="" />
            <p>в год</p>
                            
</div>

                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </div>
    )
}
export default Yuridik
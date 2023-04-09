import './yuridik.scss'
import YuridikImg from '../../assets/images/yuridik.png'
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </div>
    )
}
export default Yuridik
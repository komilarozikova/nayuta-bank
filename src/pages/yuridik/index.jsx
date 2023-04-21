import './yuridik.scss'
import YuridikImg from '../../assets/images/yuridik.svg'
import { Accordion } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import twentytwo from '../../components/Physical/twentytwo.svg'
// import thirtyeight from '../../components/Physical/thirtyeight.svg'
import parse from 'html-react-parser';
import { useUserContext } from '../../components/context/home-context'
import { useTranslation } from 'react-i18next'




const Yuridik = () => {
    const { legalcredit } = useUserContext()
    const { t } = useTranslation()
    return (
        <div className='container yuridik load-anim'>
            <div className="yuridik-banner">
                <div className="banner-title">
                    <h2>{t("yuridik.title")}</h2>
                    <p>{t("yuridik.text1")}</p>
                    <p>{t("yuridik.text2")}</p>
                </div>
                <div className="banner-img">
                    <img src={YuridikImg} alt="" />
                </div>
            </div>
            <div className="accordions">
                <Accordion defaultActiveKey="0">
                    <div className="grid-accordion">
                        {
                            legalcredit?.map((item, key) => (
                                <>
                                    <Accordion.Item eventKey={key}>
                                        <Accordion.Header>
                                            <h2>{item?.title}</h2>
                                            <p>{item?.short_description}</p>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {
                                                parse(`${item?.long_description}`)
                                            }
                                            <div className="sale">
                                                <p><p>{t("yuridik.start")}</p></p>
                                                <img src={item.first_image} alt="" />
                                                <p><p>{t("yuridik.end")}</p></p>
                                                <img src={item.second_image} alt="" />
                                                <p><p>{t("yuridik.year")}</p></p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </>
                            ))
                        }

                    </div>
                    {/* <Accordion.Item className='last' eventKey="2">
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
                    </Accordion.Item> */}

                </Accordion>
            </div>
        </div>
    )
}
export default Yuridik
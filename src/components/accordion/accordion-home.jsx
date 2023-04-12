import { Accordion } from "react-bootstrap";
import question1 from '../../assets/images/question1.svg'
import question2 from '../../assets/images/question2.svg'
import question3 from '../../assets/images/question3.svg'
import question4 from '../../assets/images/question4.svg'
import './according.scss'

const AccordionHome = () => {
    return (
        <div className="accordion" >
           
            <h1 className="accordionh">Часто задаваемые вопросы</h1>
            <Accordion id="acc" defaultActiveKey="0">
                <Accordion.Item id="accitem" eventKey="0">
                    <Accordion.Header id="accheader">1. Какие документы необходимы для оформления кредита?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Для оформления кредита требуются паспорт или иной документ, удостоверяющий личность заемщика;
                        </p>
                        <p>
                            Справка с места работы, подтверждающая полученный доход, оформленная в установленном порядке;
                        </p>
                        <p>
                            Документы, касающиеся обеспечения возврата кредита.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Как оформляется онлайн-кредит?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Для оформления кредита требуются паспорт или иной документ, удостоверяющий личность заемщика;
                        </p>
                        <p>
                            Справка с места работы, подтверждающая полученный доход, оформленная в установленном порядке;
                        </p>
                        <p>
                            Документы, касающиеся обеспечения возврата кредита.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Можно ли производить платежи по кредиту, не посещая банк?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Для оформления кредита требуются паспорт или иной документ, удостоверяющий личность заемщика;
                        </p>
                        <p>
                            Справка с места работы, подтверждающая полученный доход, оформленная в установленном порядке;
                        </p>
                        <p>
                            Документы, касающиеся обеспечения возврата кредита.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. Со скольких лет выделяются кредиты физическим лицам:</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Для оформления кредита требуются паспорт или иной документ, удостоверяющий личность заемщика;
                        </p>
                        <p>
                            Справка с места работы, подтверждающая полученный доход, оформленная в установленном порядке;
                        </p>
                        <p>
                            Документы, касающиеся обеспечения возврата кредита.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>5. Предоставляется ли кредит на образование
                        иностранным гражданам и лицам без гражданства?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Для оформления кредита требуются паспорт или иной документ, удостоверяющий личность заемщика;
                        </p>
                        <p>
                            Справка с места работы, подтверждающая полученный доход, оформленная в установленном порядке;
                        </p>
                        <p>
                            Документы, касающиеся обеспечения возврата кредита.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <img className="qleft" src={question1} alt="" />
            <img className="qcenter1" src={question2} alt="" />
            <img className="qcenter2" src={question3} alt="" />
            <img className="qright" src={question4} alt="" />
        </div>
    );
}

export default AccordionHome;
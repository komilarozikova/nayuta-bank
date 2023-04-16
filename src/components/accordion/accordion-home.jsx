import { Accordion } from "react-bootstrap";
import question1 from '../../assets/images/question1.svg'
import question2 from '../../assets/images/question2.svg'
import question3 from '../../assets/images/question3.svg'
import question4 from '../../assets/images/question4.svg'
import './according.scss'
import { useUserContext } from "../../context/home-context";

const AccordionHome = () => {
    const { faq } = useUserContext()
    return (
        <div className="accordion" >
            <h1 className="accordionh">Часто задаваемые вопросы</h1>
            <Accordion id="acc" defaultActiveKey="0">
                {
                    faq?.map((item, key) => (
                        <Accordion.Item id="accitem" eventKey={key}>
                            <Accordion.Header id="accheader">{item?.title}</Accordion.Header>
                            <Accordion.Body>
                                <p>{item?.description}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
            <img className="qleft" src={question1} alt="" />
            <img className="qcenter1" src={question2} alt="" />
            <img className="qcenter2" src={question3} alt="" />
            <img className="qright" src={question4} alt="" />
        </div>
    );
}

export default AccordionHome;
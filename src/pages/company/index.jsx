import './compant.scss'
import BannerImg from '../../assets/images/banner.png'
import PdfImg from '../../assets/images/pdf.png'
import BeforeImg from '../../assets/images/beforeimg.png'
import InfImg from '../../assets/images/infinity.png'
import MyPdf from '../../98117f01-fc4b-4024-a692-67c35b2a4f50.pdf'
const Company = () => {
    return (
        <div className='load-anim'>
            <div className="company-banner container">
                <div className="banner-title">
                    <h2>О компании</h2>
                    <p>Микрофинансовая организация Nayuta следует японской модели в своей деятельности, а опыт работы сотрудников в Японии позволяет им делиться своей экспертностью с клиентами.</p>
                    <p>Мы нацелены найти профессиональное решение ваших
                        финансовых вопросов. Так строится бизнес и в Японии, где
                        клиент и его потребности первостепенны.</p>
                    <p>Применяя такой подход в МФО Nayuta, мы облегчаем жизнь
                        людям в разных финансовых ситуациях и поддерживаем
                        развитие бизнеса.</p>
                </div>
                <div className="banner-img">
                    <img src={BannerImg} alt="" />
                </div>
            </div>
            <div className="pdf-section">
                <div className="container">
                    <h2>Документы компании</h2>
                    <div className="pdfs">
                        <div className="pdf-item">
                            <img src={PdfImg} alt="" />
                            <a href={MyPdf} target="_blank">Письмо с разрешением деятельности компании от Центрального Банка</a>
                        </div>
                        <div className="pdf-item">
                            <img src={PdfImg} alt="" />
                            <a target='_blank' href={MyPdf}>Свидетельство о регистрации</a>
                        </div>
                    </div>
                </div>
                <img className='before' src={BeforeImg} alt="" />
                <img className='right' src={BeforeImg} alt="" />
                <img className='center' src={BeforeImg} alt="" />
                <img className='left' src={BeforeImg} alt="" />
            </div>
            <div className="mission container">
                <h1>Миссия</h1>
                <div className="mission-section">
                    <div className="mission-title">
                        <p>Nayuta в переводе с японского языка – бесконечное число. Оно точно отражает то, к чему мы стремимся, как компания – приумножать капитал и доверие наших клиентов.</p>
                        <p>Руководствуемся честностью, ориентируемся на результат и, прежде всего, человека.</p>
                    </div>
                    <div className="mission-img">
                        <img src={InfImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Company
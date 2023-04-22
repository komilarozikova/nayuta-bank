import Table from 'react-bootstrap/Table';
import React, { createRef, useState } from "react";
import "./Calculator.scss";
import Cancel from '../assets/images/Cancel.svg'
import { Button, Form, Modal } from "react-bootstrap";
import { PostData } from '../hooks/request';
import Pdf from "react-to-pdf";
import Pechat from './Vector.svg'
const Calculator = () => {
  const ref = createRef();

  const [price, setPrice] = useState(50000000)
  const [percentage, setPercentage] = useState(16)
  const [amount, setAmount] = useState(45000000)
  const [interest, setInterest] = useState(20)
  const [schedule, setSchedule] = useState('annuity')
  const [period, setPeriod] = useState(24)
  const [data, setData] = useState()

  const [show, setShow] = useState(false);
  // const [calculateList, setCalculateList] = useState()
  // const { lang } = useUserContext()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function Send(e) {
    e.preventDefault();
    PostData("/calculate/", {
      "price": price,
      "down_payment_percentage": percentage,
      "loan_amount": amount,
      "interest_rate": interest,
      "payment_schedule": schedule,
      "loan_period": parseInt(period)
    })
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch(err => console.log(err))
  }
  // useEffect(() => {
  //   if (data) {
  //     GetData(`/calculate-list/`, lang)
  //       .then(data => {
  //         setCalculateList(data)
  //       })
  //       .catch(err => console.log(err))
  //   }
  // }, [lang])
  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [6, 4]
  };

  return (
    <div className="calc-wrapper">
      {/* <form id="">
        <h1>Кредитный калькулятор</h1>
        <div className="form-credit"
          style={{
            backgroundImage: `url(${Imagebg})`
          }}
        >
          <div className="holder">
            <span>Рассчитайте кредит по своим параметрам</span>
          </div>
          <div className="inputs">
            <div className="form-input">
              <label htmlFor="">Тип кредита:</label>
              <div className="range">
                <select name="" id="">
                  <option value="">Физическим лицам</option>
                </select>
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="">Сумма кредита:</label>
              <div className="range">
                <div className="value">{state.value}</div>
                <InputRange
                  maxValue={10}
                  minValue={0}
                  value={state.value}
                  onChange={(value) => setState({ value })}
                  onChangeComplete={(value) => console.log(value)}
                />
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="">Процентная ставка в год:</label>
              <div className="range">
                <input type="text" name="" id="" />
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="">Срок</label>
              <div className="range">
                <div className="value">{state2.value}</div>
                <InputRange
                  maxValue={10}
                  minValue={0}
                  value={state2.value}
                  onChange={(value) => setState2({ value })}
                  onChangeComplete={(value) => console.log(value)}
                />
              </div>
            </div>
          </div>
          <div className="btns">
            <Button onClick={handleShow}>Рассчитать</Button>
          </div>
        </div>

      </form> */}
      <Form className='cal-form' onSubmit={Send}>
        <div className="cal-form-text">
          <p>Рассчитайте кредит по своим параметрам</p>
        </div>
        <div className="type-credit">
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label className='disabled'>Кому</Form.Label>
            <Form.Select onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
              <option value="annuity">Физическим лицам</option>
              <option value="3">Юредических лицам</option>
            </Form.Select>
          </Form.Group>

        </div>

        <div className="first-child-form">
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label>Стоимость автотранспорта</Form.Label>
            <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="395312000" />
          </Form.Group>
          <Form.Select disabled onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
            <option value="annuity">сум</option>
          </Form.Select>
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label>Первоначальный взнос (%) </Form.Label>
            <Form.Control value={percentage} onChange={(e) => setPercentage(e.target.value)} type="text" placeholder="30" />
          </Form.Group>
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Control onChange={(e) => setPercentage(e.target.value)} type="text" value={
              ((percentage / 100) * price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' сум'
            } placeholder="3118 593 600.000" />
          </Form.Group>
        </div>

        <div className="second-child-form">
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label>Сумма кредита </Form.Label>
            <Form.Control value={amount} onChange={(e) => setAmount(e.target.value)} type="text" placeholder="" />
          </Form.Group>
          <Form.Select disabled onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
            <option value="annuity">сум</option>
          </Form.Select>

          <Form.Group className="" controlId="formBasicPassword">

            <Form.Label>Льготный период</Form.Label>
            <Form.Select disabled onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
              <option value="annuity">0</option>
              <option value="Дифференцированный"></option>
            </Form.Select>
          </Form.Group>

          <Form.Select disabled onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
            <option value="Месяц">Месяц</option>
          </Form.Select>

        </div>
        <div className="thirt-child-form">
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label>Процентная ставка </Form.Label>
            <Form.Control value={interest} onChange={(e) => setInterest(e.target.value)} type="text" placeholder="" />
          </Form.Group>
          <Form.Select disabled onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
            <option value="Годовых">Годовых</option>
          </Form.Select>
          <Form.Group className="w-100" controlId="formBasicPassword">
            <Form.Label>Порядок погашения  </Form.Label>
            <Form.Select onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
              <option value="annuity">annuity</option>
              {/* <option value="3">Дифференцированный</option> */}
            </Form.Select>
          </Form.Group>
        </div>
        <div className="fourth-child-form">
          <Form.Group className="w-100" controlId="formBasicPassword">
            <Form.Label>Период кредитования </Form.Label>
            <Form.Control value={period} onChange={(e) => setPeriod(e.target.value)} type="text" placeholder="" />
          </Form.Group>
          <Form.Select disabled onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
            <option value="Месяц">Месяц</option>
          </Form.Select>
        </div>
        <Button onClick={handleShow} variant="outiled" type="submit">
          Рассчитать
        </Button>
      </Form>
      <p className="title">
        *Расчёты являются предварительными. Чтобы уточнить детали,{" "}
        <span>свяжитесь</span> с нами и получите бесплатную консультацию.
      </p>

      <Modal className='table-modal' show={show} onHide={handleClose}>
        <Modal.Header>
          <button onClick={() => setShow(false)}><img src={Cancel} alt="" /></button>
        </Modal.Header>
        <div className="result">
          <div className="child">
            <h1>Параметры кредита</h1>
            <p>Стоимость автотранспорта <span>{data?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' сум'}</span></p>
            <p>Первоначальный взнос <span>{data?.down_payment_percentage}%</span></p>
            <p>Сумма кредита <span>{data?.loan_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' сум'}</span></p>
            <p>Период кредитования <span>{data?.loan_period} месяцев</span></p>
            <p>Процентная ставка <span>{data?.interest_rate}%</span></p>
            <p>Порядок погашения <span>{data?.payment_schedule}</span></p>
          </div>
          <div className="child">
            <h1>Результаты расчета</h1>
            <p>Всего выплат <span>{data?.total_payments.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' сум'}</span></p>
            <p>Переплата <span>{data?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' сум'}</span></p>
            <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => <div className='pechat' onClick={toPdf}><img src={Pechat} alt="" /> На печать</div>}
            </Pdf>
          </div>
        </div>
        <Modal.Body options={options} ref={ref}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>№</th>
                <th>Дата</th>
                <th>Остаток по кредиту</th>
                <th>Сумма погашения <span style={{
                  display: "block",
                  textAlign: "left"
                }}>кредита</span></th>
                <th>Сумма процентов по <span style={{
                  display: "block",
                  textAlign: "left"
                }}>кредиту</span></th>
                <th>Итого к <span style={{
                  display: "block",
                  textAlign: "left"
                }}>погашению</span></th>
              </tr>
            </thead>
            <tbody>
              {
                data?.payments?.map((item, key) => (
                  <tr>
                    <td style={{
                      width: "0%"
                    }}>{item?.payment_number}</td>
                    <td>{item?.payment_date}</td>
                    <td>{item?.payment_amount}</td>
                    <td>{item?.principal_amount}</td>
                    <td>{item?.interest_amount}</td>
                    <td>{item?.remaining_balance}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div >
  );
};

export default Calculator;

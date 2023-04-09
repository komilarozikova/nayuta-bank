import Table from 'react-bootstrap/Table';
import React, { useState } from "react";
import InputRange from "react-input-range";
import "./Calculator.scss";
import "react-input-range/lib/css/index.css"
import Imagebg from '../assets/images/bg.png'
import Cancel from '../assets/images/Cancel.svg'
import { Button, Modal } from "react-bootstrap";
const Calculator = () => {
  const [state, setState] = useState({
    value: 10
  })
  const [state2, setState2] = useState({
    value: 0
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="calc-wrapper">
      <form id="">
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

      </form>
      <p className="title">
        *Расчёты являются предварительными. Чтобы уточнить детали,{" "}
        <span>свяжитесь</span> с нами и получите бесплатную консультацию.
      </p>

      <Modal className='table-modal' show={show} onHide={handleClose}>
        <Modal.Header>
          <button onClick={() => setShow(false)}><img src={Cancel} alt="" /></button>
        </Modal.Header>
        <Modal.Body>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Тип кредита</th>
                <th>Месяц</th>
                <th>Остаток по кредиту</th>
                <th>Основной долг</th>
                <th>Проценты</th>
                <th>Сумма выплаты</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Физическому лицу</td>
                <td>1</td>
                <td>6 000 000</td>
                <td>536 000</td>
                <td>2 000.00</td>
                <td>538 000</td>
              </tr>
              <tr>
                <td></td>
                <td>2</td>
                <td>5 463 000</td>
                <td>536 000</td>
                <td>536 000</td>
                <td>@536 000</td>

              </tr>
              <tr>
                <td></td>
                <td>3</td>
                <td>536 000</td>
                <td>536 000</td>
                <td>536 000</td>
                <td>536 000</td>
              </tr>
              <tr>
                <td></td>
                <td>4</td>
                <td>536 000</td>
                <td>536 000</td>
                <td>536 000</td>
                <td>536 000</td>
              </tr>
              <tr>
                <td></td>
                <td>5</td>
                <td>536 000</td>
                <td>536 000</td>
                <td>536 000</td>
                <td>536 000</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Calculator;

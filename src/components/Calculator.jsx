import React, { useState } from "react";
import InputRange from "react-input-range";
import "./Calculator.scss";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "react-input-range/lib/css/index.css"
import Imagebg from '../assets/images/bg.png'
const Calculator = () => {

  const [show, setShow] = useState(false);

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [state, setState] = useState({
        value: 0
    })
    const [state2, setState2] = useState({
      value: 0
  })
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
                  maxValue={5}
                  minValue={0}
                  value={state2.value}
                  onChange={(value) => setState2({ value })}
                  onChangeComplete={(value) => console.log(value)}
                />
              </div>
            </div>
          </div>
          <div className="btns">
          <Button variant="primary" onClick={handleShow} >Рассчитать</Button>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Тип кредита</th>
      <th scope="col">Месяц</th>
      <th scope="col">Остаток по кредиту</th>
      <th scope="col">Основной долг</th>
      <th scope="col">Проценты</th>
      <th scope="col">Сумма выплаты</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </div>
        
      </form>
      <p className="title">
        *Расчёты являются предварительными. Чтобы уточнить детали,{" "}
        <span>свяжитесь</span> с нами и получите бесплатную консультацию.
      </p>
    </div>
  );
};

export default Calculator;

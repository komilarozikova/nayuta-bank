import React, { useState } from "react";
import InputRange from "react-input-range";
import "./Calculator.scss";
import "react-input-range/lib/css/index.css"
import Imagebg from '../assets/images/bg.png'
const Calculator = () => {
    const [state, setState] = useState({
        value: 10
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
          </div>
          <div className="btns">
          <button>Рассчитать</button>
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

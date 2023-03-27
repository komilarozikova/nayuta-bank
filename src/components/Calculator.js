import React from 'react'
import '../components/Calculator.css'



const Calculator = () => {
  return (
    // <div className='calc'>
    //     <h1>Кредитный калькулятор</h1>
    //     <div className='calc-container'>
           
    //     </div>
    // </div>
    <div className='col-12'>
        <div className='card'>
            <div className='card-body'>
                <form id='frm-loan'>
                    <h1>Кредитный калькулятор</h1>

                    <div className='row'>
                        <div className='form-group col-sm-4'>
                            <label>Тип кредита:</label>
                            <input  className='form-control'></input>
                        </div>
                        <div className='form-group col-sm-4'>
                            <label>Сумма кредита:</label>
                            <input  className='form-control'></input>
                        </div>
                        <div className='form-group col-sm-4'>
                            <label>Срок</label>
                            <input  className='form-control'></input>
                        </div>
                        <div className='form-group col-sm-4'>
                            <label>Процентная ставка в год:</label>
                            <input  className='form-control'></input>
                        </div>
                        <div className='form-group col-sm-4'>
                            <label>Вид расчета:</label>
                            <input  className='form-control'></input>
                        </div>

                        <div className='form-group col-sm-4'>
                            <button type='submit' id='save' className='btn btn-success'>Рассчитать</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Calculator
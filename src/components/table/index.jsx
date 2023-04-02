import './main.scss'
import TableImg from '../../assets/images/table.svg'
import UnlockImg from '../../assets/images/unlock.png'
const TableHome = () => {
    return (
        <div className='tables-section'>
            <div className="tables-section-titles">
                <h1>Почему лучше обратиться к нам, а не в банк?</h1>
                <p>Ваше время для нас в приоритете, поэтому в отличие от банка, мы оперативно обрабатываем запросы и предложим тот финансовый ключ, который нужен именно вам. </p>
                <button>Подробнее</button>
            </div>
            <div className='tables'>
                <table>
                    <tr>
                        <th></th>
                        <th><img src={TableImg} alt="" /></th>
                        <th>Банк</th>
                    </tr>
                    <tr>
                        <th>Скоринг</th>
                        <th>1 день</th>
                        <th>2-3 рабочих дня</th>
                    </tr>
                    <tr>
                        <td>Выдача</td>
                        <td>На второй день после
                            оформления заявки</td>
                        <td>Зависит от товара/услуги</td>
                    </tr>
                    <tr>
                        <td>Условия</td>
                        <td>Наличие
                            паспорта или ID</td>
                        <td>Пакет документов</td>
                    </tr>
                    <tr>
                        <td className='border-none'>Бесплатная
                            консультация</td>
                        <td className='border-none'>Есть</td>
                        <td className='border-none'>Не везде</td>
                    </tr>
                </table>
                <img className='img first' src={UnlockImg} alt="" />
                <img className='img last' src={UnlockImg} alt="" />
            </div>
        </div>
    )
}
export default TableHome
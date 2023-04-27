import React from 'react';
import '../Products/Products.scss';
import { useUserContext } from '.././context/home-context';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { products } = useUserContext()
  const { t } = useTranslation();

  return (
    <div className='productspage'>
      <h1>{t("products.title")}</h1>
      <div className='products-container'>
        {
          products?.map((item, key) => (
            <div className='products'>
              <div className="product-img">
                <img src={item?.image} alt='' />
              </div>
              <div className="product-title">
                <h4>{item?.title}</h4>
                <p>{item?.description} </p>
              </div>
              <a href={item?.link} className='btn-products'>{t("button.title")}</a>
            </div>

          ))
        }

      </div>
      {/* <p className='producttext'>{t("products.text1")} <a href='https://xn--80affa3aj0al.xn--80asehdb/#@nayuta_mmt'>{t("products.a")}</a> {t("products.text2")}</p> */}
    </div>
  )
}

export default Products
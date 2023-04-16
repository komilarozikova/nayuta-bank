import { createContext, useContext, useEffect, useState } from 'react';
import { GetData } from '../hooks/request';

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [rates, setRates] = useState()
    const [faq, setFaq] = useState()
    const [calculateList, setCalculateList] = useState()
    const [carousels, setCarousels] = useState()
    const [individualcreditType, setIndividualcreditType] = useState()
    const [individualcredit, setIndividualcredit] = useState()
    const [legalcredit, setLegalcredit] = useState()
    const [products, setProducts] = useState()
    const [whosecredit, setWhosecredit] = useState()
    useEffect(() => {
        GetData(`/exchange-rates/`)
            .then(data => {
                setRates(data)
            })
            .catch(err => console.log(err))
        GetData(`/FAQ/`)
            .then(data => {
                setFaq(data)
            })
            .catch(err => console.log(err))
        GetData(`/calculate-list/`)
            .then(data => {
                setCalculateList(data)
            })
            .catch(err => console.log(err))
        GetData(`/carousels/`)
            .then(data => {
                setCarousels(data)
            })
            .catch(err => console.log(err))
        GetData(`/individual-credit-type/`)
            .then(data => {
                setIndividualcreditType(data)
            })
            .catch(err => console.log(err))
        GetData(`/individual-credit/`)
            .then(data => {
                setIndividualcredit(data)
            })
            .catch(err => console.log(err))
        GetData(`/legal-credit/`)
            .then(data => {
                setLegalcredit(data)
            })
            .catch(err => console.log(err))
        GetData(`/products/`)
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
        GetData(`/whose-credit/`)
            .then(data => {
                setWhosecredit(data)
            })
            .catch(err => console.log(err))
    }, [])
    const value = {
        rates, setRates,
        faq, setFaq,
        calculateList, setCalculateList,
        carousels, setCarousels,
        individualcreditType, setIndividualcreditType,
        individualcredit, setIndividualcredit,
        legalcredit, setLegalcredit,
        products, setProducts,
        whosecredit, setWhosecredit
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)
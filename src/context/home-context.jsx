import { createContext, useContext, useEffect, useState } from 'react';
import { GetData } from '../hooks/request';

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [rates, setRates] = useState()
    useEffect(() => {
        GetData(`exchange-rates/`)
            .then(data => {
                setRates(data)
            })
            .catch(err => console.log(err))
    }, [])
    const value = {
        rates, setRates
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)
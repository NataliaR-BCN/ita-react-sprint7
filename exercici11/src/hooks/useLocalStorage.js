import { useState } from "react";

export function useLocalStorage (key, initialValues) {

    const [storedData, setStoredData] = useState(()=> {
     
            const item = JSON.parse(localStorage.getItem(key))
            return item ? item : initialValues
    });

    const setValues = value => {
        try {
            setStoredData(value)
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(error)
        }
    }

    return [storedData, setValues]

}
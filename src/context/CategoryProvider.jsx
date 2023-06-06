
import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const CategoryContext = createContext()

const CategoryProvider = ({children}) => {

    const [categories, setCategories] = useState([])

    useEffect( () => {
        const getDrinks = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const {data} = await axios(url)
            setCategories(data.drinks)
        }
        getDrinks()
    }, [] )

    return (
        <CategoryContext.Provider 
            value={{categories}}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export {
    CategoryProvider
}

export default CategoryContext
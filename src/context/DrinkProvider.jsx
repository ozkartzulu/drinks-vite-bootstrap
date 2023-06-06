
import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const DrinkContext = createContext()

const DrinkProvider = ({children}) => {

    const [drinks, setDrinks] = useState([])

    const [modal, setModal] = useState(false)

    const [drinkId, setDrinkId] = useState('')

    const [recipe, setRecipe] = useState({})

    const [loader, setLoader] = useState(false)

    useEffect( () => {
        const getRecipe = async () => {
            setLoader(true)
            if(!drinkId) return
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
                const {data} = await axios(url)
                setRecipe(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally{
                setLoader(false)
            }
        }
        getRecipe()
        return setRecipe({})
    }, [drinkId] )

    const getDrinks = async (drink) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink.name}&c=${drink.category}`
            const {data} = await axios(url)
            setDrinks(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    const changeStateModal = () => {
        setModal(!modal)
    }

    const handleDrinkId = (id) => {
        setDrinkId(id)
    }

    return (
        <DrinkContext.Provider 
            value={{getDrinks, drinks, changeStateModal, modal, handleDrinkId, recipe, loader}}
        >
            {children}
        </DrinkContext.Provider>
    )
}

export {
    DrinkProvider
}

export default DrinkContext
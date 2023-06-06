
import useDrink from "../hooks/useDrink"
import { Row } from 'react-bootstrap'
import Drink from "./Drink"

const ListDrinks = () => {

    const { drinks } = useDrink()

  return (
    <Row>
        {drinks.map( drink => <Drink key={drink.idDrink} drink={drink} /> )}
    </Row>
  )
}

export default ListDrinks
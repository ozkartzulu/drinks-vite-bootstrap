import {Container} from 'react-bootstrap'
import Formulary from './components/Formulary'
import ListDrinks from './components/ListDrinks'
import ModalDrink from './components/ModalDrink'
import { CategoryProvider } from './context/CategoryProvider'
import { DrinkProvider } from './context/DrinkProvider'

function App() {


  return (
    <CategoryProvider>
      <DrinkProvider>
        <header className="py-4">
          <h1>Finder Drink</h1>
        </header>
        <Container >
          <Formulary/>
          <ListDrinks />
          <ModalDrink />
        </Container>
      </DrinkProvider>
    </CategoryProvider>
  )
}

export default App

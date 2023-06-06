
import { Modal, Image } from 'react-bootstrap'
import useDrink from '../hooks/useDrink'

const ModalDrink = () => {

    const {modal, changeStateModal, recipe, loader} = useDrink()

    const showIngredients = () => {
        let ingredients = []
        for (let i = 1; i < 16; i++) {
            if(recipe[`strIngredient${i}`]){
                ingredients.push(
                    <li key={i}>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients
    }

  return (
    !loader && (
    <Modal show={modal} onHide={changeStateModal}>
        <Image src={recipe.strDrinkThumb}  alt={`Image of ${recipe.strDrink}`}/>
        <Modal.Header>
            <Modal.Title>{recipe.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <div>
                <h3>Instructions</h3>
                {recipe.strInstructions}
                <h3>Ingredients and Amount</h3>
                {showIngredients()}
            </div>
        </Modal.Body>
    </Modal>
    )
  )
}

export default ModalDrink
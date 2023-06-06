
import { Col, Card, Button } from 'react-bootstrap'
import useDrink from '../hooks/useDrink'

const Drink = ({drink}) => {

    const {changeStateModal, handleDrinkId} = useDrink()

  return (
    <Col md={4} lg={3}>
        <Card className='mb-4'>
            <Card.Img 
                variant='top' 
                src={drink.strDrinkThumb} 
                alt={drink.strDrink}
            />
            <Card.Body>
                <Card.Title>{drink.strDrink}</Card.Title>
                <Button 
                    variant='warning' 
                    className='w-100 text-uppercase'
                    onClick={() => {
                        changeStateModal()
                        handleDrinkId(drink.idDrink)
                    }}
                >See Recipe</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default Drink
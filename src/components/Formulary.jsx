
import { useState } from 'react'
import { Form, Button, Row, Col, Alert} from 'react-bootstrap'
import useCategory from '../hooks/useCategory'
import useDrink from '../hooks/useDrink'

const Formulary = () => {

    const { categories } = useCategory()
    const { getDrinks } = useDrink()

    const [search, setSearch] = useState({
        name: '',
        category: ''
    })

    const [alert, setAlert] = useState('')

    const handleChange = (e) => {
        setSearch({...search, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(search).includes('')){
            setAlert('The inputs are required')
            return
        }
        setAlert('')
        getDrinks(search)
    }

    return (
        <Form className='mt-5 mb-5' onSubmit={handleSubmit}>
            {alert && <Alert variant='danger'>{alert}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor='name' >Drink Name</Form.Label>
                        <Form.Control id='name' name='name' 
                            type='text' 
                            placeholder='Vodka' 
                            onChange={handleChange} 
                            value={search.name}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor='category' >Drink Category</Form.Label>
                        <Form.Select id='category' name='category' onChange={handleChange}>
                            <option value="">- Select Category -</option>
                            {categories.map( (category) => <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option> )}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-end'>
                <Col md={3}>
                    <Button variant='danger' className='w-100 text-text-uppercase mt-3' type='submit'>Get Drink </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulary
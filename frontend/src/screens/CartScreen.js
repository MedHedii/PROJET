import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Form, Image, Button, ListGroup } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
    const roomId = match.params.id
    console.log("roomId",roomId);
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const  cart  = useSelector(state => state.cart)
    const { cartItems } = cart
    
    useEffect(() => {
        if(roomId) { 
            dispatch(addToCart(roomId, qty)) 
        }
    }, [dispatch, roomId, qty]) 
    const removeFromCartHandler = (id) =>{
        dispatch(removeFromCart(id))
    }
    const checkOutHandler = () =>{
        history.push('/login?redirect=infoclient')
    }
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Your Cart is Empty <Link to='/home'>Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant = 'flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.room}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/rooms/${item.name}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={2}>
                                    <Form.Control as='select' value={item.qty} onChange={(e) =>
                                    dispatch(addToCart(item.room, Number(e.target.value)))}>  
                                    {
                                    [...Array(item.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}     
                                    </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' variant='light' onClick={() => 
                                        removeFromCartHandler(item.room)}>
                                            <i style={{color: 'red'}} className="far fa-trash-alt"></i>
                                        </Button> 
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col> 
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) </h2>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
                            .toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='w-100'
                            disabled={cartItems.length === 0} onClick={checkOutHandler}>
                                Procced to checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>                                    
            </Col> 
        </Row>
    )
}

export default CartScreen

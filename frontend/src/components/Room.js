import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Room = ({ room }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/room/${room._id}`}>
                <Card.Img src={room.image} variant ='top' />
            </Link>
            
            <Card.Body>
            <Link to={`/room/${room._id}`}>
                <Card.Title as='div'>
                <strong>{room.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='div'>
               <Rating 
               value={room.rating} 
               text={`${room.numReviews} reviews`} />
            </Card.Text>
            <Card.Text as='h3'>${room.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Room

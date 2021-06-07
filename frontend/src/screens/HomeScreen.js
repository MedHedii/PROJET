import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Room from '../components/Room'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listRooms } from '../actions/roomActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const roomList = useSelector((state) => state.roomList)
  const { loading, error, rooms, page, pages } = roomList

  useEffect(() => {
    dispatch(listRooms(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>

      <h1>Our Rooms</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {rooms.map((room) => (
              <Col key={room._id} 
              md={6} lg={4} xl={3}
              >
                <Room room={room} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
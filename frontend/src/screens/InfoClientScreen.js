import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveInfoClient } from '../actions/cartActions'
import './login.css'

const InfoClientScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { infoClient } = cart
  const [first_name, setFirstname] = useState(infoClient.first_name)
  const [last_name, setLastname] = useState(infoClient.last_name)
  const [location, setLocation] = useState(infoClient.location)
  const [phone, setPhone] = useState(infoClient.phone)
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveInfoClient({ first_name, last_name, location, phone }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Info Client</h1>
      <div className="login-page">
            <form onSubmit={submitHandler}>
                <h2>Info Client</h2>
                <input type="text" name="FIRST NAME" required
                placeholder="Enter your first name" value={first_name} onChange={(e) => setFirstname(e.target.value)} />

                <input type="text" name="LAST NAME" required
                placeholder="Enter your last name" value={last_name} onChange={(e) => setLastname(e.target.value)} />

                <input type="text" name="LOCATION" required
                placeholder="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)} />

                <input type="text" name="PHONE" required
                placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <div className="row">
                    <Button type='submit' variant='primary'>Continue</Button>
                </div>
            </form>
        </div>
    </FormContainer>
  )
}

export default InfoClientScreen
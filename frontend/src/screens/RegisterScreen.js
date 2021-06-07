import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import './login.css'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  
  const dispatch = useDispatch()
  
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister
  
  const redirect = location.search ? location.search.split('=')[1] : '/home'
  
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h1>REGISTER</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

      <div className="login-page">
            <form onSubmit={submitHandler}>
                <h2>Register</h2>
                <input type="text" name="name" required
                placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

                <input type="email" name="email" required
                placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="confirm.password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                </div>
            </form>
        </div>
    </FormContainer>
  )
}

export default RegisterScreen
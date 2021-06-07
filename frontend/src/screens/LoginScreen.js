import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import './login.css'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()
  
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  
  const redirect = location.search ? location.search.split('=')[1] : '/home'
  
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  
  return (
    <FormContainer>
      <h1>LOGIN</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <div className="login-page">
            <form onSubmit={submitHandler}>
                <h2>Login</h2>
                <input type="email" name="email" required
                placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className="row">
                    <button type="submit">Login</button>
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </div>
            </form>
        </div>
    </FormContainer>
  )
}

export default LoginScreen
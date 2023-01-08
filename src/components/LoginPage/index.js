import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LoginPage = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const {history} = props

  const onUsername = event => {
    setUsername(event.target.value)
  }

  const onPassword = event => {
    setPassword(event.target.value)
  }

  const onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const onFailure = msg => {
    setShowError(true)
    setErrorMsg(msg)
  }

  const onLogin = async event => {
    event.preventDefault()
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      onSuccess(data.jwt_token)
    } else {
      onFailure(data.error_msg)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="bg-home">
      <img
        className="login website logo"
        alt="app name"
        src="https://res.cloudinary.com/dd49gqyl5/image/upload/v1671190802/mini%20project/Group_7399_kxfzw3.svg"
      />
      <div className="login-card">
        <form onSubmit={onLogin}>
          <h1 className="login-head">Login</h1>
          <label htmlFor="username" className="label">
            username
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            className="user-input"
            value={username}
            onChange={onUsername}
          />
          <label htmlFor="password" className="label label2 ">
            password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            className="user-input"
            value={password}
            onChange={onPassword}
          />
          {showError && <p className="error-msg">{errorMsg}</p>}
          <button type="submit" className="log-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

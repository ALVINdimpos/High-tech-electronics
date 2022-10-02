import React from 'react'
import './Login.css'
import Logo from '.././assets/images/logo2.webp'
const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const userNameHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                if (data.error) {
                    setError(data.error)
                } else {
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('user', JSON.stringify(data.user))
                    setMessage(data.message)
                }
            })
    }

  return (
<div className="wrapper">
  <div className="logo1">
    <img src={Logo} alt="" />
  </div>
  <div className="text-center mt-4 name">
    Login
  </div>
  <form className="p-3 mt-3">
    <div className="form-field d-flex align-items-center">
      <span className="far fa-user" />
      <input type="text" name="userName" id="userName" placeholder="Username" onChange={userNameHandler} />
    </div>
    <div className="form-field d-flex align-items-center">
      <span className="fas fa-key" />
      <input type="password" name="password" id="pwd" placeholder="Password" onChange={passwordHandler} />
    </div>
    <button className="btn mt-3" onClick={submitHandler}>Login</button>
  </form>
  <div className="text-center fs-6">
    <a href="#">Forget password?</a>
  </div>
</div>

  )
}

export default Login
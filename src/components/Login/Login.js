import React from 'react';
import{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';


const Login = ({client, setClient}) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    valid: null
  })

  const[loggedInUser, setLoggedInUser] = useState(user)
  const[message, setMessage] = useState('')

  let navigate = useNavigate()

  let handleChange = (e) => {
    setLoggedInUser({...loggedInUser, [e.target.id]:e.target.value})
  }

  let handleSubmit = (e) =>{
    const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler-backend.herokuapp.com' : 'http://localhost:8000'
    e.preventDefault()
    fetch(`${url}/session/login`, {
      method: "POST",
      mode:'no-cors',
      body: JSON.stringify(loggedInUser),
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json'
      }
    })
    .then((response) =>{
      return(
        response.json()
      )
    })
    .then((data)=> {
      console.log(data)
      if(data.status === 200){
        setClient(loggedInUser.username)
        navigate('/lists')
      } else if (data.status === 400){
        setMessage(data.message)
        console.log(message)
      }
    })
  }

  return (
    <div>
      <h2>Log In</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="username" style={{fontWeight:'bold', color:'white'}}>Username:</label>
          <input type="text" id="username" name="username" placeholder="Ex: Phil" onChange={handleChange} ></input>
        </div>
        <div className="input">
          <label htmlFor="password" style={{fontWeight:'bold', color:'white'}}>Password:</label>
          <input type="password" id="password" name="password" placeholder="Ex:583%aGc9" onChange={handleChange} ></input>
        </div>
        <Button className="submit-button" value="submit" type="submit" variant="dark">Submit</Button>
        <p style={{fontWeight: 'bold', color:'white'}}>{message}</p>
      </form>
    </div>
  )
}

export default Login;
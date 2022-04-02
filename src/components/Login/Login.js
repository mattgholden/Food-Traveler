import React from 'react';
import{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card} from 'react-bootstrap';


const Login = ({client, setClient}) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    // confirmPassword: '',
    // valid: null
  });

  const[loggedInUser, setLoggedInUser] = useState(user)
  const[message, setMessage] = useState('')

  let navigate = useNavigate()

  let handleChange = (e) => {
    setLoggedInUser({...loggedInUser, [e.target.id]:e.target.value})
  }

  let handleSubmit = (e) =>{
    e.preventDefault()
    const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler-backend.herokuapp.com' : 'http://localhost:8000'
    fetch(`${url}/session/login`, {
      method: "POST",
      // mode:'no-cors',
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
      <Card className="mb-3" style={{width: '21rem' , height: '22rem'}}>
        <Card.Body className="mb-2" style={{width: '20rem'}}>
        <Form onSubmit={handleSubmit} method="POST">
          <Form.Group className="mb-3">
            <Form.Label className="label">Username: </Form.Label>
            <Form.Control type="text" id="username" name="username" placeholder="Ex: Phil" onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label className="label">Password:</Form.Label>
              <Form.Control type="password" id="password" name="password" placeholder="Ex:583%aGc9" onChange={handleChange}>
              </Form.Control>
          </Form.Group>
          <Button size="lg" className="submit-button" value="submit" type="submit" variant="dark">Submit</Button>
            <p>{message}</p>
        </Form>
      </Card.Body>
      </Card>
    </div>
  )
}

export default Login;
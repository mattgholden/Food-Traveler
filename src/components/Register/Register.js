import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import { Form, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Register = ({setClient}) => {

  const [user] = useState({
    username: '',
    password: '',
    confirmPassword:'',
    valid: null
  })

  const[createUser, setCreateUser] = useState(user)
  const [msg, setMessage] = useState('')

  let navigate = useNavigate()

  let handleSubmit = (e) => {
    const url = 'https://foodtraveler.herokuapp.com/'
    e.preventDefault()
    fetch(`${url}/session/register`, {
      method: "POST",
      body: JSON.stringify(createUser),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then((res) => {
      return(
        res.json()
      )
    })
    .then((data) => {
      console.log(data)
      if(data.status === 200){
        setClient(createUser.username)
        navigate('/lists')
      } else if (data.status === 400){
        setMessage(data.msg)
      }
    })
  }

  let handleChange = (e) => {
    setCreateUser({...createUser, [e.target.id]:e.target.value})
    if(createUser.password === createUser.confirmPassword){
      setMessage('Create an account.')
    } else {
      setMessage('Passwords Must Match')
    }
  }

  return (
    <div>
      <h2>Register an Account</h2>
      <Card className="mb-3" style={{width: '21rem' , height: '22rem'}}>
        <Card.Body className="mb-2" style={{width: '20rem'}}>
          <Form onSubmit={handleSubmit} method="POST">
            <Form.Group className="mb-3">
              <Form.Label className="label">Username: </Form.Label>
              <Form.Control type="text" id="username" name="username" placeholder="Ex: Phil" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label">Password:</Form.Label>
              <Form.Control type="password" id="password" name="password" placeholder="Ex:583%aGc9" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label">Confirm Password:</Form.Label>
              <Form.Control type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Button size="lg" className="register-button" value="Register" type="submit" variant="dark">Register</Button>
            <p>{msg}</p>
          </Form>
          <Link to={'/login'}>Already a user?</Link>
      </Card.Body>
      </Card>
    </div>
  )
}

export default Register;
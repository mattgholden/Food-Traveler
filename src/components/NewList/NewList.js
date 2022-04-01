import { React, useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import SearchBar from '../SearchBar/SearchBar';

//Display Map on this page?

const NewList = ({addList}) => {

    const[list, setList] = useState({})
    let navigate = useNavigate()
  
    
    let handleSubmit = async(e) =>{
      e.preventDefault()
      const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler.herokuapp.com/' : 'http://localhost:8000/toEatList'
      let response = await fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify(list),
        headers:{
          'Content-Type':'application/json'
        }
      })

      let newList = await response.json()
      // console.log(newList)
      addList(newList)
      navigate(`/lists`)
    }

    let handleChange = (e) => {
      setList({...list, [e.target.id]:e.target.value})
    }


  return (
    <div className='body body-newList' style={{alignContent:'left'}}>
      <h1>New ToEat List</h1>
      {/* <SearchBar search={search} />    */}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Destination: </Form.Label>
          <Form.Control type="text" id="destination" name="destination" placeholder="Enter Destination" onChange={handleChange}></Form.Control>
        </Form.Group>
        <group className="group">
            <label className="label">Dates of Travel: </label>
          <div className="control"> 
            <div className={`input is-medium ${'input-form'}`}>
              <input type="date" className="form-control" id="startDateOfTravel" name="startDateOfTravel" onChange={handleChange}/>
              <div className="input-group-addon">to</div>
              <input type="date" className="form-control" id="endDateOfTravel" name="endDateOfTravel" onChange={handleChange}/>
            </div> 
          </div>
        </group>
        <Form.Group>
          <Form.Label>Duration of Travel: </Form.Label>
          <Form.Control type="text" id="amountOfDays" name="amountOfDays" placeholder="Must be a number" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Restaurants to Try: </Form.Label>
          <Form.Control type="text" id="restaurantName" name="restaurantName" placeholder="Enter restaurants to try" onChange={handleChange}></Form.Control>
          <Link to='/search'>Search Restaurants</Link>
        </Form.Group>
        <Button size="lg" className="editList-button" type ="submit" variant="dark">
          Add New List
        </Button>
        <Button size="lg" variant="dark">
          <Link to={'/lists'} style={{textDecoration: 'none', color: 'black'}}>Cancel</Link>
        </Button>
      </Form>
    </div>
  )
}

export default NewList
import { React, useState } from 'react';
import { useNavigate } from 'react-router';
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewList.css';

//Display Map on this page?

const NewList = ({addList}) => {

    const[list, setList] = useState({
      destination: '',
      startDateOfTravel:'',
      endDateOfTravel:'',
      restaurantName:'',
      amountOfDays: Number
    })

    let navigate = useNavigate()
  
    
    let handleSubmit = async(e) =>{
      e.preventDefault()
      const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler-backend.herokuapp.com' : 'http://localhost:8000'
      let response = await fetch(`${url}/toEatList`, {
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

    <>
    <div className='new-container'>
      <header className={`card-header-title`}>New ToEat List</header>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="card">
        <div className="field" >
          <group className="group">
            <label className="label">Destination: </label>
            <div className="control">
              <input className={`input is-medium ${'input-form'}`} type="text" id="destination" name="destination" placeholder="Enter Destination" onChange={handleChange}></input>
            </div>
          </group>
          <group className="group">
            <label className="label">Dates of Travel: </label>
            <div className="control"> 
              <div className={`input is-medium ${'input-form'}`}>
                <input type="date" class="form-control" id="startDateOfTravel" name="startDateOfTravel" onChange={handleChange}/>
                <div className="input-group-addon"> to </div>
                <input type="date" class="form-control" id="endDateOfTravel" name="endDateOfTravel" onChange={handleChange}/>
              </div> 
            </div>
          </group>
          <group className="group">
            <label className="label">Duration: </label>
            <div className="control"> 
              <input className={`input is-medium ${'input-form'}`} type="text" id="amountOfDays" name="amountOfDays" placeholder="Must be a number" onChange={handleChange}/>
            </div>
          </group>
          <group className="group">
            <label className="label">Restaurants to Try: </label>
            <div className="control">
              <input className={`input is-medium ${'input-form'}`} type="text" id="restaurantName" name="restaurantName" placeholder="Enter restaurants to try" onChange={handleChange}/>
              <Link to={'/mapview'}>Search for Restaurants</Link>
            </div>
          </group>
        </div>
      </div>
        <div className={`field is-centered ${'button'}`}>
          <p className="control">
            <button className="button is-success" type="submit">
              Add New List
            </button>
          </p>
          <p className="control">
            <button class="button">
              <Link to={'/lists'} className="button is-warning">Cancel</Link>
            </button>
          </p>
        </div>
        </Form>
      </div>
    <div className='new-body'></div>
</>
  )
}

export default NewList
import React, { useState, useEffect } from 'react';
import {  useParams, Link } from 'react-router-dom';
import {useNavigate} from 'react-router';
 import './EditList.css'

const EditList = () => {

  const[list, setList] = useState('')
  

  let{id} = useParams()
  const[params, setParams] = useState(id)
 
  let navigate = useNavigate()

  useEffect(() => {
    const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler-backend.herokuapp.com' : 'http://localhost:8000/'
    const editDetails = async() => {
      let listResponse = await fetch(`${url}toEatList/details/${params}`)
      let json = await listResponse.json()
      setList(json)
    }
    editDetails()
}, [])

  let handleChange = (e) => {
    setList({...list, [e.target.id]:e.target.value})
  }

  let handleSubmit = async(e) => {
    const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler-backend.herokuapp.com' : 'http://localhost:8000'
    e.preventDefault()
    let response = await fetch(`${url}/toEatList/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify(list),
      headers: {
        'Content-Type':'application/json'
      }
    })
    let r = await response.json()
    console.log(r)
    // if(r) setParams(r._id)
    navigate(`/lists/details/${id}`)
  }

  return (
    <>
      <div className='edit-container'>
        <header className={`card-header-title`}>Edit ToEat List for {list.destination}</header>
          <div className="card">
          <div className="field">
            <group className="group">
              <label className="label">Destination: </label>
              <div className="control">
                <input className={`input is-medium ${'input-form'}`} type="text" id="destination" name="destination" placeholder={list.destination} onChange={handleChange}></input>
              </div>
            </group>
            <group className="group">
              <label className="label">Dates of Travel: </label>
              <div className="control"> 
                <div className={`input is-medium ${'input-form'}`}>
                  <input type="date" class="form-control" id="startDateOfTravel" name="startDateOfTravel" value={list.startDateOfTravel} onChange={handleChange}/>
                  <div className="input-group-addon"> to </div>
                  <input type="date" class="form-control" id="endDateOfTravel" name="endDateOfTravel" value={list.endDateOfTravel} onChange={handleChange}/>
                </div> 
              </div>
            </group>
            <group className="group">
              <label className="label">Duration: </label>
              <div className="control"> 
                <input className={`input is-medium ${'input-form'}`} type="text" id="amountOfDays" name="amountOfDays" placeholder={list.amountOfDays} onChange={handleChange}/>
              </div>
            </group>
            <group className="group">
              <label className="label">Restaurants to Try: </label>
              <div className="control">
                <input className={`input is-medium ${'input-form'}`} type="text" id="restaurantName" name="restaurantName" placeholder={list.restaurantName} onChange={handleChange}/>
              </div>
            </group>
          </div>
        </div>
          <div className={`field is-centered ${'button'}`}>
            <p className="control">
              <button className="button is-link" onClick={handleSubmit}>
                Edit List
              </button>
            </p>
            <p className="control">
              <button class="button">
                <Link to={`/lists/details/${id}`} style={{textDecoration: 'none'}}>Cancel</Link>
              </button>
            </p>
          </div>
        </div>
      <div className='edit-body'></div>
  </>
  )
}

export default EditList;
import React from 'react';
import { useState , useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './ListDetail.css';

const ListDetail = ({setLists}) => {
  
    let listInFocus = (e) => {
        console.log(e.target)
    }
    const [list, setList] = useState({});
    let {id} = useParams()
    let navigate = useNavigate()
  
    useEffect(()=> {
      const showDetails = async() => {
        const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler-backend.herokuapp.com' : 'http://localhost:8000/toEatList/'
        let listResponse = await fetch(`${url}${id}`)
        let json = await listResponse.json()
        setList(json)
      }
      showDetails()
    }, [id])

    //DELETE
    let deleteList = async(list) => {
        const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler-backend.herokuapp.com' : 'http://localhost:8000/toEatList/'
        let data = await fetch(`${url}/${id}`, {
            method:'DELETE',
            body: null,
            headers:{
                'Content-Type':'application/json'
            }
        })
        let remainingLists = await data.json()
        setLists(remainingLists)
        navigate('/lists')
    }

    //To Edit Page
    let handleClick = async() => {
      navigate (`/lists/edit/${id}`)
    }

    return(
      <>
      <div className='list-container'>
        <header className={`card-header`}>
          <p className='card-header-title'>ToEat List for {list.destination}</p>
        </header>
        <div className = {`card`}>
          <ListGroup variant="flush">
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>Destination:</span> {list.destination} </h5></ListGroup.Item>
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>Dates of Travel:</span> {list.startDateOfTravel} to {list.endDateOfTravel}</h5></ListGroup.Item>
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>Duration of Travel: </span>{list.amountOfDays}</h5></ListGroup.Item>
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>Restaurants to Try: </span>{list.restaurantName}</h5></ListGroup.Item>
          </ListGroup>
        </div>
        <div className={`field ${'button'}`}>
            <footer className="card-footer">
              <button className="button is-link" onClick={handleClick}>
              ✍️ Edit
              </button>
            </footer>
            <footer className="card-footer">
              <button className="button">
                <Link to={`/lists`}>⬅︎ Back to Lists</Link>
              </button>
            </footer>
            <footer className="card-footer">
              <button className="button is-danger" onClick={() => deleteList(list._id)}>
              X Delete
              </button>
            </footer>
          </div>
        </div>
      <div className='list-body'></div>

    </>
    )
}

export default ListDetail;

import React from 'react';
import {Link} from 'react-router-dom';
import{ useNavigate } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'


const AllLists = ({lists, setLists, list, setList, client, setClient}) => {

    const listInFocus = (e) => {
        console.log(e.target)
    }

    const displayLists = lists.map((list) => {
        return(
         <Card>
             <Card.Body>
                 <Card.Header>
                <Link to={`/lists/details/${list._id}`} key={list._id} onClick={listInFocus}>
                    <h3 key={list._id}> {list.destination}</h3>
                </Link>
                </Card.Header>
                <Card.Title style={{fontSize:'2rem'}}>
                    {list.restaurantName}
                </Card.Title>
            </Card.Body>
         </Card>
        )
    })

    let navigate = useNavigate()
        const logOut = () => {
        const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler.herokuapp.com/' : 'http://localhost:8000'
            fetch(`${url}/session/logout` , {
                method: "GET",
                body: null,
                headers: {
                    'Content-Type':'application/json'
                }
            })
            .then((res) => {
                return(
                    res.json()
                )
            })
            .then((data) => {
                if(data.status === 200){
                    navigate('/login')
                }
            })
        }

  return (
    <div>
        <h2>Travel List</h2> 
        <div>{displayLists}</div>
        <h2 style={{fontSize:'5rem', color:'white', fontFamily: 'Estrangelo Edessa'}}>{client}'s Log</h2>
        <button className="button is-primary" >
          <Link to='/lists/new'>Add New ToEat List</Link>
        </button>
        <button className="button is-danger"  onClick={logOut}>Log out</button>
    </div>
  )
}

export default AllLists;
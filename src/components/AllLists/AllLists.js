import React from 'react';
import {Link} from 'react-router-dom';
import{ useNavigate } from 'react-router';
import { Card } from 'react-bootstrap';
import './AllLists.css';


const AllLists = ({lists, setLists, list, setList, client, setClient}) => {

    const listInFocus = (e) => {
        console.log(e.target)
    }

    const displayLists = lists.map((list) => {
        return(
            <Card className="mb-3 bg-warning bg-light" style={{width:'15rem'}} border="dark">
                <Card.Body>
                    <Card.Header>
                    <Link to={`/lists/details/${list._id}`} key={list._id} onClick={listInFocus}>
                        <h3 key={list._id}> {list.destination}</h3>
                    </Link>
                    </Card.Header> Restaurant(s):
                    <Card.Title style={{fontSize:'2rem'}}>
                        {list.restaurantName}
                    </Card.Title>
                </Card.Body>
            </Card>
        )
    })

    let navigate = useNavigate()
        const logOut = () => {
        const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler-backend.herokuapp.com' : 'http://localhost:8000'
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
                    navigate('/')
                }
            })
        }

  return (
    <>
    <header className={`card-header-title`}>{client}'s Travel List</header>
        <div className="card">
        <div className="field">
          <group className="group">
            <div>{displayLists}</div>
          </group>
          <div className={`field is-centered ${'button'}`}>
            <footer className="card-footer">
                <p className="control">
                <button className="button is-primary">
                    <Link to='/lists/new'>Add New ToEat List</Link>
                </button>
                </p>
            </footer>
          <p className="control">
            <button className="button is-danger" onClick={logOut}>Log out</button>
          </p>
        </div>
      </div>
    </div>
    <div className='all-list-body'></div>
</>
  )
}

export default AllLists;
import React from 'react'
import './NavBar.css'
import FoodTravelLogo from '../../FoodTravelLogo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';

const NavBar = () => {

  let navigate = useNavigate()

  let handleClick = async() => {
    navigate (`/register`)
  }

  let handleMouseClick = async() => {
    navigate ('/login')
  }

    return (
      <nav className="navbar is-info">
       <div className="navbar-brand">
        <Link className="navbar-item"to="/">
           <img src={FoodTravelLogo} className='logo' alt='Food Traveler Logo'/>
         </Link>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/mapview">
              Food Traveler
            </Link>
        </div>
        </div>
        <div>
          <button className={`button is-primary is-rounded${'nav-button'}`} onClick={handleMouseClick}>Log In</button>
          {/* <button className={`button is-danger is-rounded${'nav-button'}`} LogOut >Log Out</button> */}
          <button className={`button is-rounded${'nav-button'}`} onClick={handleClick}>Register</button>
        </div>
    </nav>
  )
}


export default NavBar



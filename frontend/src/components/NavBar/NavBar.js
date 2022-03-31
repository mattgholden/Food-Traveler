import React from 'react'
import './NavBar.css'
import FoodTravelLogo from '../../FoodTravelLogo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {

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
          <button className={`button is-primary is-rounded${'nav-button'}`}>Log In</button>
          {/* <button className={`button is-danger is-rounded${'nav-button'}`} LogOut >Log Out</button> */}
          <button className={`button is-rounded${'nav-button'}`}>Register</button>
        </div>
    </nav>
  )
}
//   return(
//  

//   <div id="navbarExampleTransparentExample" className="navbar-menu">
//     <div className="navbar-start">
//       <Link className="navbar-item" to="/mapview">
//         Food Traveler
//       </Link>
//     </div>

//     <div className="navbar-end">
//       <div className="navbar-item">
//         <div className="field is-grouped">
//           <p className="control">
//             <Link className="bd-tw-button button" >
//               <span className="icon">
//                 <i className="fab fa-twitter"></i>
//               </span>
//               <span>
//                 Login
//               </span>
//             </Link>
//           </p>
//           <p className="control">
//             <Link className="button is-primary" to="/register">
//               <span className="icon">
//                 <i className="fas fa-download"></i>
//               </span>
//               <span>Register</span>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>
//   )
// }

export default NavBar



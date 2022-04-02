import React from 'react';
import './Welcome.css';
// import NavBar from './NavBar/NavBar';



export function Welcome() {


return (
    <div>
      <div className='welcome-background'></div>  
      <div>
        <h1 className='header'>Welcome!  Register to create an account and begin creating your "ToEat Lists"!</h1>
      </div>
        {/* <NavBar /> */}
        {/* <img src={logo} className={styles.logo} alt="logo" /> */}
        {/* <div><Search/></div> */}
        {/* <SearchResults /> */}
    </div>
  );
}
export default Welcome



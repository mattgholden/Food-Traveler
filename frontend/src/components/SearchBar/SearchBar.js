import React, { useState } from 'react';
import './SearchBar.css';


const SearchBar = (props) => {
    const[term, setTerm] = useState (props.term || '');
    const [location, setLocation] = useState(props.location || '')

    const submit = (e) => {
        if(typeof props.search === 'function'){
            props.search(term, location)
        }
        console.log(term, location)
        e.preventDefault()
    }

  return (
    <form onSubmit={submit}>
        <div className={`field has-addons ${'field'}`}>
            <p className="control">
                <input className={`input is-medium ${'input'}`} onChange={(e) => setTerm(e.target.value)} type="text" placeholder="Restaurant Names"/>
            </p>
            <p className={`control ${'p-control'}`}>
                <button className="button is-static is-medium">Search Restaurants</button>
            </p>
            <p className={`control ${'p-control'}`}>
                <input className={`input is-medium ${'input'}`} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Where?"/>
            </p>
            <div className="control">
                <div className="button is-static is-medium">Location</div>
            </div>
            <div className={`button is-medium ${'search-button'}`} onClick={submit}>
                <span className="icon is-large"><i class="fa-solid fa-magnifying-glass-location"></i></span>
            </div>
        </div>
    </form>
  )
}

export default SearchBar
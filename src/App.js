
import './App.css';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import AllLists from './components/AllLists/AllLists';
import EditList from './components/EditList/EditList';
import ListDetail from './components/ListDetail/ListDetail';
import Login from './components/Login/Login';
import NewList from './components/NewList/NewList';
import Register from './components/Register/Register';
import NavBar from './components/NavBar/NavBar';
import MapView from './components/MapView/MapView';



function App() {
  const [lists, setLists] = useState([]);
  const[url, setUrl] = useState();
  console.log(url)
  const[client, setClient] = useState('')
  
  // AllLists
  let getLists = async() => {
    const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler-backend.herokuapp.com/' : 'http://localhost:8000/toEatList'
    let data = await fetch(`${url}`)
    let json = await data.json();
      setLists(json);
      console.log(json)
  }

  useEffect(() => {
    getLists();


  const url = process.env.REACT_APP_ENV === 'production' ? 'https://foodtraveler-backend.herokuapp.com' : 'http://localhost:8000/toEatList'
  fetch(url)
    .then((response) => response.json())
    .then(data => {
      setLists(data)
    })
    setUrl(url)
  }, []);

  let addList = (newList) => {
     setLists([...lists, newList])
  }


  return (
    <div className= 'App' >
      <main>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path="/lists" element={<AllLists lists={lists} setLists={setLists} client={client} setClient={setClient}/>}></Route>
          <Route path="/lists/edit/:id" element={<EditList/>}></Route>
          <Route path="/lists/details/:id" element={<ListDetail setLists={setLists}/>}></Route>
          <Route path="/login" element={<Login client={client} setClient={setClient}/>}></Route>
          <Route path="/lists/new" element={<NewList addList={addList}/>}></Route>
          <Route path="/register" element={<Register client={client} setClient={setClient}/>}></Route>
          <Route path="/mapview" element={<MapView/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

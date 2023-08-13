import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Register from './Registration';
import Header from './Header';
import Login from './Login';
import { useState } from 'react';
import { Contextapi } from './Contextapi';
import Dashboard from './Dashboard';

import Addmovie from './Addmovie';
import Detailmovie from './Moviedetails';
import Addcategory from './Addcategory';
import Adminmovie from './Adminmovie';
import Usermovie from './movieuser';








function App() {
  const[loginname,setLoginname]=useState(window.localStorage.getItem('loginname'))

  return ( 
    <>
    <Router>
      <Contextapi.Provider value={{loginname,setLoginname}}>

      <Header/>
      <Routes>
        <Route path='/reg' element={<Register/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/adminmovie' element={<Adminmovie/>}></Route>
        <Route path='/addmovie' element={<Addmovie/>}></Route>
        <Route path='/movies' element={<Usermovie/>}></Route>
        <Route path='/moremovie' element={<Detailmovie/>}></Route>
        <Route path='/type' element={<Addcategory/>}></Route>
       
             




      </Routes>
      </Contextapi.Provider>
    </Router>
    </>
   );
}

export default App;
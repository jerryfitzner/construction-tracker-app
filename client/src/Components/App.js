// import logo from './logo.svg';
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
// import Houses from './Houses';
import Navbar from './Navbar';
import Home from './Home';
// import CreateHouse from './CreateHouse';

function App() {
  const [cont, setCont] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((contractor) => setCont(contractor))
      }
    });
  }, []);

  


  return (
    <div>
      <Navbar cont={cont} setCont={setCont} />
      {cont ? (
        <Routes>
          <Route path='/' element={ <Home cont={cont} /> } />
          <Route path='*' element={ <Home cont={cont} /> } />
        </Routes>
      ):(
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/signin' element={ <SignIn setCont={ setCont } /> } />
          <Route path='/signup' element={ <SignUp setCont={ setCont } /> } />
          <Route path='*' element={ <SignIn setCont={ setCont } /> } />
        </Routes>
      )}
    </div>
    
  );
}

export default App;

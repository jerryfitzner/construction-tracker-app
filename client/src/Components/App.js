// import logo from './logo.svg';
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SignIn from './SignIn';
import Houses from './Houses';

function App() {
  const [cont, setCont] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((cont) = setCont(cont))
      }
    });
  }, []);


  return (
    <div>
      {cont ? (
        <Routes>
          <Route path='/' element={ <Houses /> } />
        </Routes>
      ):(
        <Routes>
          <Route path='/signin' element={ <SignIn /> } />
        </Routes>
      )}
    </div>
    
  );
}

export default App;

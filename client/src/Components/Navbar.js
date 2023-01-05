import React from "react";
import { NavLink } from "react-router-dom";

function Navbar ({ cont, setCont }){


  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    }).then((r) => {
      if (r.ok){
        setCont(null)
      }
    });
  }


  return (
    <div>
      <div>
      </div>
      <div>
        {cont ? (
          <div className="NavBar">
            <ul>
              <li><NavLink onClick={handleLogout}>Logout</NavLink></li>
              <li><NavLink to='/'>Home</NavLink></li>       
            </ul>
          </div>
          ):(
          <div className="NavBar">
            <ul>
              <li><NavLink to='/signup'>Sign-Up</NavLink></li>
              <li><NavLink to='/signin'>Log In</NavLink></li>
              <li><NavLink to='/'>Home</NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;




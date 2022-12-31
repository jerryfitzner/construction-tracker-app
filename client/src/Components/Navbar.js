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
          <div>
            <NavLink to='/'>Home</NavLink>
            {/* <NavLink to='/logout'>Logout</NavLink> */}
            <button onClick={handleLogout}> Logout </button>
          </div>
          ):(
          <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/signup'>Sign-Up</NavLink>
            <NavLink to='/signin'>Log In</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
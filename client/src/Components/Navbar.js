import React from "react";
import { NavLink } from "react-router-dom";

function Navbar ({ cont, setCont }){


  return (
    <div>
      <div>
      </div>
      <div>
        {cont ? (
          <div>
            <NavLink to='/'>Home</NavLink>
            <button></button>
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
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar ({ cont, setCont }){


  return (
    <div>
      <div>
        <NavLink to='/'>Home</NavLink>
      </div>
      <div>
        {cont ? (
          <button></button>
        ):(
          <div>
            <NavLink to='/signup'>Sign-Up</NavLink>
            <NavLink to='/login'>Log In</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
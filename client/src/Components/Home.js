import React from "react";
import Houses from "./Houses";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";


function Home ({ cont }){

  console.log(cont)

  return (
    <div>
      { cont ? (
        <div>
          <h1>Logged In</h1>
          <Houses />
        </div>
        

      ):(
        <h1>Logged Out</h1>
      )}
    </div>
  );
}

export default Home;
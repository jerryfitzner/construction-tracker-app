import React from "react";
import Houses from "./Houses";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";


function Home ({ cont }){

  

  return (
    <div>
      { cont ? (
        <h1>Logged In</h1>
      ):(
        <h1>Logged Out</h1>
      )}
    </div>
  );
}

export default Home;
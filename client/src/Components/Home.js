import React from "react";
import Houses from "./Houses";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";


function Home ({ cont }){

  

  return (
    <div>
      { cont ? (
        <div>
          <h1>Logged In</h1>
          <Houses cont={cont}/>
        </div>
        

      ):(
        <div>
          <h1>Welcome to the Construction APP</h1>
          <h4></h4>
        </div>

      )}
    </div>
  );
}

export default Home;
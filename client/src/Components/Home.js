import React from "react";
import Houses from "./Houses";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";



function Home ({ cont }){

  

  return (
    <div>
      { cont ? (
        <div>
          <h5>Welcome {cont.company}!</h5>
          <Houses cont={cont}/>
        </div>
      ):(
        <div>
          <h1>Welcome to the Construction APP</h1>
          <h4>Use the menu above to Log-In or Sign-Up!</h4>
          {/* <img src="..../public/ConstructionImage.png" /> */}
        </div>

      )}
    </div>
  );
}

export default Home;
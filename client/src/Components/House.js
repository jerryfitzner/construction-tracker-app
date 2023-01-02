import React from "react";
import Projects from "./Projects";

function House ({ singleHouse, cont }){

  // console.log(singleHouse)

  return (
    <div>
      <h2>{singleHouse.street} {singleHouse.city} {singleHouse.state} {singleHouse.zip}</h2>
      <h4>{singleHouse.owner_first_name} {singleHouse.owner_last_name}</h4>
      <Projects houseProjects={singleHouse.projects} houseId={singleHouse.id} cont={cont}/>
    </div>
  );
}

export default House;
import React from "react";
import Projects from "./Projects";

function House ({ singleHouse }){

  

  return (
    <div>
      <h2>{singleHouse.street} {singleHouse.city} {singleHouse.state} {singleHouse.zip}</h2>
      <h4>{singleHouse.owner_first_name} {singleHouse.owner_last_name}</h4>
      <Projects houseProjects={singleHouse.projects} />
    </div>
  );
}

export default House;
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import House from "./House";
import CreateHouse from "./CreateHouse";

function Houses (){
  const [houses, setHouses] = useState([]);

  useEffect( () => {
    fetch('/houses')
      .then((r) => r.json())
      .then((house) => setHouses(house))
  }, [])

  


  return (
    <div>
      <h1>Houses</h1>
      <div>
        {houses ? (
          houses.map(((singleHouse) => (<House key={uuidv4()} singleHouse={singleHouse}/>)))
        ):(
          <p>No houses yet!</p>
        )}
      </div>
    </div>
  );
}

export default Houses;
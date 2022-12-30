import React, { useEffect, useState } from "react";
import House from "./House";
import CreateHouse from "./CreateHouse";

function Houses (){
  const [houses, setHouses] = useState([]);

  useEffect( () => {
    fetch('/houses')
      .then((r) => r.json())
      .then((houses) => setHouses(houses))
  }, [])


  return (
    <div>
      <h1>Houses</h1>
      <div>
        {houses ? (
          houses.map((singleHouse => <House singleHouse={singleHouse}/>))
        ):(
          <p>No houses yet!</p>
        )}
      </div>
    </div>
  );
}

export default Houses;
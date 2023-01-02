import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import House from "./House";
import CreateHouse from "./CreateHouse";


function Houses ({ cont }){
  const [houses, setHouses] = useState([]);

  useEffect( () => {
    fetch('/houses')
      .then((r) => r.json())
      .then((house) => setHouses(house))
  }, []);

  const addHouse = (house) => {
    setHouses([...houses, house])
  };
  
  return (
    <div>
      <h1>Houses</h1>
      <div>
        
          {houses.map((singleHouse) => (<House key={uuidv4()} singleHouse={singleHouse} cont={cont}/>))}
      </div>
      <div>
        {<CreateHouse addHouse={addHouse} />}
      </div>
    </div>
  );
}

export default Houses;
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import House from "./House";
import CreateHouse from "./CreateHouse";


function Houses ({ cont }){
  const [houses, setHouses] = useState([]);
  const [isCreateHouse, setIsCreateHouse] = useState(false);

  useEffect( () => {
    fetch('/houses')
      .then((r) => r.json())
      .then((house) => setHouses(house))
  }, []);

  const addHouse = (house) => {
    setHouses([...houses, house])
  };

  const handleClick = () => {
    setIsCreateHouse(!isCreateHouse)
  }
  
  return (
    <div>
      <h3>Houses</h3>
      <div>
        {isCreateHouse ? (
          <CreateHouse addHouse={addHouse} />
          ):(
          <button onClick={handleClick} className="Create-projectBtn">Add House</button>
        )}
      </div>
      <div>
        
          {houses.map((singleHouse) => (<House key={uuidv4()} singleHouse={singleHouse} cont={cont}/>))}
      </div>
    </div>
  );
}

export default Houses;
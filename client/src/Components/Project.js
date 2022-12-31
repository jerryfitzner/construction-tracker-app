import React from "react";

function Project ({ proj }){

  
  
  return (
    <div>
      <li>
        <p>Project name: {proj.name}</p>
        <p>Estimated Completion Date: {proj.completion_date}</p>
        <p>Project complete: {proj.complete ? 'Yes' : 'No'}</p>
        <p>Notes: {proj.notes}</p>
      </li>
    </div>
  );
}

export default Project;
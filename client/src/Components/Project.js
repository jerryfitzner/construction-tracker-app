import React, { useState } from "react";

function Project ({ proj, deleteProject }){
  const [isComplete, setIsComplete] = useState(proj.complete);
  

  const handleClick = (e) => {
    fetch(`/projects/${proj.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "complete": !isComplete})
    }).then((r) => {
      if (r.ok) {
        r.json().then(status => setIsComplete(status.complete))
      } else {
        r.json.then(error => console.log(error))
      }
    })
  };


  const deleteClick = () => {
    fetch(`/projects/${proj.id}`, {
      method: 'DELETE',
    })
    .then((r) => {
      if (r.ok) {
        deleteProject(proj.id)
      }
    }
  )}
  
  
  return (
    <tbody>
      <tr>
        <td>{proj.name}</td>
        <td>{proj.completion_date}</td>
        <td><button onClick={handleClick}>{isComplete ? 'Yes' : 'No'}</button></td>
        <td>{proj.notes}</td>
        <td><button onClick={deleteClick}>Delete</button></td>
      </tr>
    </tbody>
  );
}

export default Project;
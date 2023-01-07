import React, { useState, useEffect } from "react";


function Project ({ proj, deleteProject, cont, houseId }){
  const projectState = {
    house_id: houseId,
    contractor_id: cont.id,
    name: proj.name,
    completion_date: proj.completion_date,
    complete: proj.complete,
    notes: proj.notes
  };

  
  // const [isComplete, setIsComplete] = useState(proj.complete);
  const [isCreator, setIsCreator] = useState(false);
  const [project, setProject] = useState(projectState)
  const [editProject, setEditProject] = useState(false);
  

  const handleCompleteClick = (e) => {
    fetch(`/projects/${proj.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "complete": !project.complete})
    }).then((r) => {
      if (r.ok) {
        r.json().then(status => setProject({...project, ["complete"]: status.complete}))
      } else {
        r.json.then(error => console.log(error))
      }
    })
  };

  const onProjectClick = (e) => {
    e.preventDefault();
    fetch(`/projects/${proj.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project),
    }).then((r) => {
      if (r.ok) {
        r.json().then((project) => {
          setProject(project);
          setEditProject(!editProject);
        })
      } else {
        r.json.then(error => console.log(error))
      }
    })
  };

  const handleEditClick = (e) => {
    setEditProject(!editProject)
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
  )};

  const handleChange = (e) => {
    setProject({...project, [e.target.name]: e.target.value })
  }

  // console.log(cont.id, proj.contractor_id)

  useEffect(() => {
    if (cont.id === proj.contractor_id) {
      setIsCreator(true)
    } 
  },[cont.id, proj.contractor_id]);
  
  
  return (
    <tbody>
      
        
        {editProject ? (
        <>
            
          <tr className="Edit-project">
              <td><input type="text" name="name" onChange={handleChange} value={project.name}/></td>
              <td><input type="date" name="completion_date" onChange={handleChange} value={project.completion_date}/></td>
              <td><input type="text" name="notes" onChange={handleChange} value={project.notes}/></td>
              <td><button onClick={handleCompleteClick} className="TableBtn">{project.complete ? 'Yes' : 'No'}</button></td>
              <td>X</td>
              <td><button onClick={onProjectClick} className="TableBtn">Save</button></td>
          </tr>
            
        </>
        ):(
        <>
        {isCreator ? (
        <tr>
          <td>{project.name}</td>
          <td>{project.completion_date}</td>
          <td>{project.notes}</td>
          <td><button onClick={handleCompleteClick} className="TableBtn">{project.complete ? 'Yes' : 'No'}</button></td>
          <td><button onClick={deleteClick} className="TableBtn">Delete</button></td>
          <td><button onClick={handleEditClick} className="TableBtn">Edit</button></td>
        </tr>
        ):(
          <tr>
            <td>{project.name}</td>
            <td>{project.completion_date}</td>
            <td>{project.notes}</td>
            <td>{project.complete ? 'Yes' : 'No'}</td>
            <td>X</td>
            <td>X</td>
          </tr>
        )}
        </>)}
      
    </tbody>
  );
}

export default Project;
import React, { useState } from "react";



function CreateProject ({ cont, houseId, updateProjects }){
  const beginningState = {
    house_id: houseId,
    contractor_id: cont.id,
    name: '',
    completion_date: '',
    complete: false,
    notes: ''
  };

  const [projectForm, setProjectForm] = useState(beginningState);
  const [isCreate, setIsCreate] = useState(false);

  // console.log(cont.id, houseId)
  // console.log(projectForm.complete)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(projectForm)
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then(project => {
          setProjectForm(beginningState);
          updateProjects(project);
          setIsCreate(!isCreate);
        })
      } else {
        resp.json().then(error => console.log(error))
      }
    })
    
  }

  const handleClick = () => {
    setIsCreate(!isCreate)
  };

  const handleChange = (e) => {
    setProjectForm({...projectForm, [e.target.name]: e.target.value})
  };

  const handleCompleteChange = () => {
    setProjectForm({...projectForm, complete: !projectForm.complete})
  };

  


  return (
    <div className="First-form">
      {isCreate ? (
      <>
      <h4>Create Project</h4>
      <form onSubmit={handleSubmit} >
        <label> 
          <input className="Project-form" value={projectForm.name} placeholder="Project Name" type="text" name="name" onChange={handleChange} required/>
        </label>
        <br/>
        <label> Completion Date: <br/>
          <input className="Project-form" value={projectForm.completion_date} type="date" name="completion_date" onChange={handleChange} required/>
        </label>
        <br/>
        <label> 
          <input value={projectForm.notes} placeholder="Project Notes" type="text" name="notes" onChange={handleChange} required/>
        </label> 
        <br/>
        <label> Check if Complete:
          <input className="Project-form" value={projectForm.complete} type="checkbox" name="complete" onChange={handleCompleteChange} />
        </label>
        <br/>
        <button className="Create-projectBtn">Create Project</button>
        <button onClick={handleClick}>Close</button>
      </form>
      </>
      ):(<button onClick={handleClick} className="Create-projectBtn">Add Project</button>)}
    </div>
  );
}

export default CreateProject;
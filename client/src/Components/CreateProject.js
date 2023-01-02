import React, { useState } from "react";

function CreateProject ({ cont, houseId, updateProjects }){
  const [projectForm, setProjectForm] = useState({
    house_id: houseId,
    contractor_id: cont.id,
    name: '',
    completion_date: '',
    complete: false,
    notes: ''
  });

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
        resp.json().then(project => updateProjects(project))
      } else {
        resp.json().then(error => console.log(error))
      }
    })
    
  }

  const handleChange = (e) => {
    setProjectForm({...projectForm, [e.target.name]: e.target.value})
  };

  const handleCompleteChange = () => {
    setProjectForm({...projectForm, complete: !projectForm.complete})
  };

  


  return (
    <div>
      <h4>Create Project</h4>
      <form onSubmit={handleSubmit}>
        <label> Project Name:
          <input value={projectForm.name} placeholder="Project Name" type="text" name="name" onChange={handleChange} required/>
        </label>
        <label> Completion Date:
          <input value={projectForm.completion_date} type="date" name="completion_date" onChange={handleChange} required/>
        </label>
        <label> Check if Complete:
          <input value={projectForm.complete} type="checkbox" name="complete" onChange={handleCompleteChange} />
        </label>
        <label> Notes:
          <input value={projectForm.notes} placeholder="Project Notes" type="text" name="notes" onChange={handleChange} required/>
        </label>
        <button>Create Project</button>
      </form>
    </div>
  );
}

export default CreateProject;
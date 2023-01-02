import React, { useState } from "react";
import Project from "./Project";
import { v4 as uuidv4 } from 'uuid';
import CreateProject from "./CreateProject";

function Projects ({ houseProjects, houseId, cont }){
  const [projects, setProjects] = useState(houseProjects);

  // console.log(houseProjects)

  // useEffect(() => {
  //   if (houseProjects) {
  //     // setIsProject(true);
  //     setProjects(houseProjects)
  //   }
  // }, [])

  // console.log(isProject)

  const updateProjects = (project) => {
    setProjects([...projects, project])
  };

  const deleteProject = (id) => {
    const updateProjects = projects.filter(project => project.id !== id)
    setProjects(updateProjects)
  };

  

  return (
    <div>
      <h4>Projects:</h4>
      <table>
        <thead>
          <tr>
            <th>Project name</th>
            <th>Estimated Completion Date</th>
            <th>Project complete</th>
            <th>Notes </th>
            <th>Delete Project</th>
          </tr>
        </thead>
        {projects.map((project) => <Project key={uuidv4()} deleteProject={deleteProject} proj={project} />)}
      </table>
      <div>
        {<CreateProject cont={cont} houseId={houseId} updateProjects={updateProjects} />}
      </div>
    </div>
  );
}

export default Projects;
import React, { useState } from "react";
import Project from "./Project";
import { v4 as uuidv4 } from 'uuid';
import CreateProject from "./CreateProject";

function Projects ({ houseProjects }){
  const [projects, setProjects] = useState([]);

  

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {houseProjects.map((project) => <Project key={uuidv4()} proj={project} />)}
      </ul>
    </div>
  );
}

export default Projects;
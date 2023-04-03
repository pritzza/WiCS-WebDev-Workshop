import React from "react";

import "./Projects.css"

import Image from "./images/chara_01.jpg"

export default function Projects(){

    return(
            <div id="projectsBox">

                <h1>Projects:</h1>

                <ProjectEntry
                    project=
                    {{
                        title: "Project 1",
                        image: Image,
                        description: "This is the description for Project 1."
                    }}
                ></ProjectEntry>

                <ProjectEntry
                    project=
                    {{
                        title: "Project 2",
                        image: Image,
                        description: "This is the description for Project 2."
                    }}
                ></ProjectEntry>

                <ProjectEntry
                    project=
                    {{
                        title: "Project 3",
                        image: Image,
                        description: "This is the description for Project 3."
                    }}
                ></ProjectEntry>

            </div>
    );
}

function ProjectEntry({project}) {
    return (
        <div className="projectBox">
            <div className="projectInfo">
                <h1> {project.title} </h1>

                <div className="projectImageBox">
                    <img src={project.image}/>
                </div>

                <p>  {project.description} </p>
            </div>
    </div>
    );
  }
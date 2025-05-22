import React from 'react'
import './Projects.css'
import project_data from '../../assets/project_data'

function Projects() {
  return (
    <section id='Projects'>
        <div className="projects">
            <div className="projectstitle">
                <h1>My Projects</h1>
            </div>
            <div className="projectscontainer">
                {project_data.map((project, index) => (
                    <div key={index} className="projectcard">
                        <img src={project.w_image} alt={`Project ${index}`} />
                        <div className="projectdesc">
                            <p>{project.w_desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="linebreak">
            <hr />
        </div>
    </section>
  )
}

export default Projects
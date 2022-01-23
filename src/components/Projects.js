import React, { useState } from 'react'
import projectData from '../projectData'

const Projects = () => {
  const [projects, setProjects] = useState(projectData)
  console.log(projects)
  return (
    <div>
      <h1 className='project-title'>projects</h1>
      <div className='projects-container'>
        {projects.map((project) => {
          const { id, title, img, desc } = project
          return (
            <article key={id} className='project'>
              <img src={img} alt={title} />
              <div className='project-copy'>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
;<h1>projects component</h1>

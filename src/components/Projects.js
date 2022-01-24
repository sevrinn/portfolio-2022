import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdComputer } from 'react-icons/md'
import { VscFileCode } from 'react-icons/vsc'
import projectData from '../projectData'

const Projects = () => {
  const [projects, setProjects] = useState(projectData)
  console.log(projects)
  return (
    <div id='projects'>
      <h1 className='project-title'>projects</h1>
      <div className='projects-container'>
        {projects.map((project) => {
          const { id, url, title, img, desc } = project
          return (
            <article key={id} className='project'>
              <img src={img} alt={title} />
              <div className='project-copy'>
                <h4>
                  <Link className='Link' to={url}>
                    {title}
                  </Link>
                </h4>

                <p>{desc}</p>
                <div className='proj-links'>
                  <Link className='Link' to={url}>
                    <MdComputer size={30} />
                  </Link>
                  <a
                    href='https://github.com/sevrinn/portfolio-2022/tree/main/src/projects'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <VscFileCode size={30} />
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Projects

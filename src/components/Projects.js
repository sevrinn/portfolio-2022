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
					const { id, url, github, title, img, desc } = project
					return (
						<article key={id} className='project'>
							<a href={url} target='_blank' rel='noreferrer'>
								<img src={img} alt={title} />
							</a>
							<div className='project-copy'>
								<h4>
									<a href={url} target='_blank' rel='noreferrer'>
										{title}
									</a>
								</h4>

								<p>{desc}</p>
								<div className='proj-links'>
									<a href={url} target='_blank' rel='noreferrer'>
										<MdComputer size={30} />
									</a>
									<a href={github} target='_blank' rel='noreferrer'>
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

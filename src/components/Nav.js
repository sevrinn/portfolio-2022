import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav id='nav' className='half-width'>
        <ul>
          <li id='projects-nav'>
            <a href='#projects'>projects</a>
          </li>
          <li id='about-nav'>
            <a href='#about'>about</a>
          </li>
          <li id='contact-nav'>
            <a href='#contact'>contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav

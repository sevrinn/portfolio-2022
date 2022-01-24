import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <h1 className='about-title'>about</h1>
      <div className='about-container'>
        <img
          src={require('../images/portrait.png')}
          alt=''
          className='about-img'
        />
        <div className='about-copy'>
          <p>
            Initially going to school for music composition, I started my
            journey into programming by embelishing my mySpace page with songs
            you couldnt pause. My curiosity grew from there and I slowly started
            learning more after college. Going the self-taught route (probably
            for way too long) I started with books and youtube tutorials and
            then switched over to online courses to learn the basics.
          </p>
          <p>
            I got super serious about my studies in 2020, built my first paid
            site in the beginning of 2021, and attended CodingDojos coding
            bootcamp over that summer, graduating with a MERN full-stack
            certification in the fall.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

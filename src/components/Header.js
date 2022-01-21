import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import Intro from './Intro'

const Header = () => {
  return (
    <header id='header' className='background-img-intro'>
      <div className='full-width'>
        <Logo />
        <Nav />
        <Intro />
      </div>
    </header>
  )
}

export default Header

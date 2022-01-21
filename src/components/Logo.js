import React from 'react'

const Logo = () => {
	return (
		<div id='logo'>
			<img
				src={require('../images/pineapple-multi-color.png')}
				alt='Pineapple logo'
				id='logo-icon'
			/>
			<h1>
				<span className='sev'>Sev</span>
				<span className='welker'>Welker</span>
			</h1>
		</div>
	)
}

export default Logo

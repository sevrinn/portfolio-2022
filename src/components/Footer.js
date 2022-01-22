import React from 'react'

const Footer = () => {
	const date = new Date()
	let year = date.getFullYear()
	console.log(year)
	return (
		<div className='footer'>
			<p>&copy;{year} Sevrinn Welker</p>
		</div>
	)
}

export default Footer

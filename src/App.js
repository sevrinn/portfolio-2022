import './App.css'
import './Normalize.css'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App'>
			<Header />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	)
}

export default App

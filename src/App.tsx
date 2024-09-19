import About from './sections/About';
import Clients from './sections/Clients';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';

function App() {
	return (
		<main className='mx-auto max-w-7xl'>
			{/* <h1 className='text-white underline '>Hello three js</h1> */}
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Clients />
			<Footer />
		</main>
	);
}

export default App;

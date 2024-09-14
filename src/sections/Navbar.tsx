import { useState } from 'react';
import { navLinks } from '../constants';

function NavItems() {
	return (
		<ul className='nav-ul'>
			{navLinks.map(({ id, href, name }) => (
				<li key={id} className='nav-li'>
					<a href={href} className='nav-li_a' onClick={() => {}}>
						{name}
					</a>
				</li>
			))}
		</ul>
	);
}

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen((e) => !e);

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
			<div className='max-w-7xl ms-auto'>
				<div className='flex items-center justify-between py-5 mx-auto c-space'>
					<a
						href='/'
						className='text-xl font-bold transition-colors hover:text-white text-neutral-400 '
					>
						Home
					</a>

					<button
						onClick={toggleMenu}
						className='flex text-neutral-400 hover:text-white focus:outline-none sm:hidden'
					>
						<img
							src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
							alt='toggle'
							className='w-6 h-6'
						/>
					</button>
					<nav className='hidden sm:flex'>
						<NavItems />
					</nav>
				</div>
			</div>

			<div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
				<nav className=''>
					<NavItems />
				</nav>
			</div>
		</header>
	);
}

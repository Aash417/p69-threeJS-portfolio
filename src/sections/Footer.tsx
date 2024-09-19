function Footer() {
	return (
		<footer className='flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300'>
			<div className='flex gap-2 text-white-500'>
				<p>Terms & Conditions</p>
				<p>|</p>
				<p>Privacy Policy</p>
			</div>

			<div className='flex gap-3'>
				<a href='https://github.com/Aash417'>
					<div className='social-icon'>
						<img
							src='/assets/github.svg'
							alt='github'
							className='w-1/2 h-1/2'
						/>
					</div>
				</a>
				<a href='https://x.com/aashish_kathait'>
					<div className='social-icon'>
						<img
							src='/assets/twitter.svg'
							alt='twitter'
							className='w-1/2 h-1/2'
						/>
					</div>
				</a>
			</div>

			<p className='text-white-500'>© 2024 Aashish. All rights reserved.</p>
		</footer>
	);
}

export default Footer;

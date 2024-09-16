import { useState } from 'react';
import Globe from 'react-globe.gl';

function About() {
	const [hasCopied, setHasCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText('aashishkathat00@gmail.com');
		setHasCopied(true);

		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	};

	return (
		<section className='my-20 c-space' id='about'>
			<div className='grid h-full grid-cols-1 gap-5 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2'>
				<div className='col-span-1 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='assets/grid1.png'
							alt='grid-1'
							className='w-full sm:h-[276px] h-fit object-contain'
						/>
						<div>
							<p className='grid-headtext'>Hi, I’m Aashish</p>
							<p className='grid-subtext'>Building something crazy in 3d</p>
						</div>
					</div>
				</div>

				<div className='col-span-1 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='assets/grid2.png'
							alt='grid-2'
							className='w-full sm:h-[276px] h-fit object-contain'
						/>
						<div>
							<p className='grid-headtext'>Tech Stack</p>
							<p className='grid-subtext'>Whatever i get my hands on</p>
						</div>
					</div>
				</div>

				<div className='col-span-1 xl:row-span-4'>
					<div className='grid-container'>
						<div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
							<Globe
								height={526}
								width={426}
								backgroundColor='rgba(0, 0, 0, 0)'
								// backgroundImageOpacity={0.5}
								showAtmosphere
								showGraticules
								globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
								bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
								// labelsData={[
								// 	{
								// 		lat: 40,
								// 		lng: -100,
								// 		text: 'Rjieka, Croatia',
								// 		color: 'white',
								// 		size: 15,
								// 	},
								// ]}
							/>
						</div>
						<div>
							<p className='grid-headtext'>
								flexible with time zone communications & locations
							</p>
							<p className='grid-subtext'>based in India.</p>
						</div>
					</div>
				</div>

				<div className='xl:col-span-2 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='assets/grid3.png'
							alt='grid-3'
							className='w-full sm:h-[266px] h-fit object-contain'
						/>

						<div>
							<p className='grid-headtext'>My Passion for Coding</p>
							<p className='grid-subtext'>Its do or die</p>
						</div>
					</div>
				</div>

				<div className='xl:col-span-1 xl:row-span-2'>
					<div className='grid-container'>
						<img
							src='assets/grid4.png'
							alt='grid-4'
							className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
						/>

						<div className='space-y-2'>
							<p className='text-center grid-subtext'>Contact me</p>
							<div className='copy-container' onClick={handleCopy}>
								<img
									src={
										hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'
									}
									alt='copy'
								/>
								<p className='font-medium text-white lg:text-2xl md:text-xl text-gray_gradient'>
									aashishkathat00@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;

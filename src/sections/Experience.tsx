import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import Avatar from '../components/Avatar';
import CanvasLoader from '../components/CanvasLoader';
import { workExperiences } from '../constants';

function Experience() {
	const [animationName, setAnimationName] = useState('idle');

	return (
		<section className='my-20 c-space' id='work'>
			<div className='w-full text-white-600'>
				<h3 className='head-text'>My Work Experience</h3>

				<div className='work-container'>
					<div className='work-canvas'>
						<Canvas>
							<ambientLight intensity={7} />
							<spotLight
								position={[10, 10, 10]}
								angle={0.15}
								penumbra={1}
							/>
							<directionalLight position={[10, 10, 10]} intensity={1} />
							<OrbitControls
								enableZoom={false}
								maxPolarAngle={Math.PI / 2}
							/>

							<Suspense fallback={<CanvasLoader />}>
								<Avatar
									position-y={-3}
									scale={3}
									animationName={animationName}
								/>
							</Suspense>
						</Canvas>
					</div>

					<div className='work-content'>
						<div className='sm:py-10 py-5 sm:px-5 px-2.5'>
							{workExperiences.map(
								({ id, name, pos, duration, title, icon, animation }) => (
									<div
										key={id}
										className='work-content_container group'
										onClick={() =>
											setAnimationName(animation.toLowerCase())
										}
										onPointerOver={() =>
											setAnimationName(animation.toLowerCase())
										}
										onPointerOut={() => setAnimationName('idle')}
									>
										<div className='flex flex-col items-center justify-start h-full py-2'>
											<div className='work-content_logo'>
												<img
													className='w-full h-full'
													src={icon}
													alt=''
												/>
											</div>

											<div className='work-content_bar' />
										</div>

										<div className='sm:p-5 px-2.5 py-5'>
											<p className='font-bold text-white-800'>
												{name}
											</p>
											<p className='mb-5 text-sm'>
												{pos} -- <span>{duration}</span>
											</p>
											<p className='transition-all duration-500 ease-in-out group-hover:text-white'>
												{title}
											</p>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;

import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as Three from 'three';
import CanvasLoader from '../components/CanvasLoader';
import Cube from '../components/Cube';
import HackerRoom from '../components/HackerRoom';
import HeroCamera from '../components/HeroCamera';
import ReactLogo from '../components/ReactLogo';
import Rings from '../components/Rings';
import Target from '../components/Target';
import { calculateSizes } from '../constants';

export default function Hero() {
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });
	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	const vector = new Three.Vector3().copy(sizes.targetPosition);
	return (
		<section className='relative flex flex-col w-full min-h-screen' id='home'>
			<div className='flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space'>
				<p className='text-xl font-medium text-center text-white sm:text-3xl font-generalsans'>
					Hi, I am Aashish<span className='waving-hand'>👋</span>
				</p>
				<p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
			</div>

			<div className='absolute inset-0 w-full h-full'>
				<Canvas className='w-full h-full'>
					<Suspense fallback={<CanvasLoader />}>
						{/* To hide controller */}
						<Leva hidden />
						<PerspectiveCamera makeDefault position={[0, 0, 30]} />

						<HeroCamera isMobile={isMobile}>
							<HackerRoom
								scale={sizes.deskScale}
								position={sizes.deskPosition}
								rotation={[0.1, -Math.PI, 0]}
							/>
						</HeroCamera>

						<group>
							<Target position={vector} />
							<ReactLogo />
							<Rings position={sizes.ringPosition} />
							<Cube position={sizes.cubePosition} />
						</group>

						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>

			{/* <div className="absolute left-0 right-0 z-10 w-full bottom-7 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div> */}
		</section>
	);
}

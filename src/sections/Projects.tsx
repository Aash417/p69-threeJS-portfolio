import { Center, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';
import { myProjects } from '../constants';

const projectCount = myProjects.length;

function Projects() {
   const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
   const handleNavigation = (direction: string) => {
      setSelectedProjectIndex((prevIndex) => {
         if (direction === 'previous') {
            return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
         } else {
            return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
         }
      });
   };
   const currentProject = myProjects[selectedProjectIndex];

   return (
      <section className='my-20 c-space' id='work'>
         <p className='head-text'>My Selected Work</p>

         <div className='grid w-full grid-cols-1 gap-5 mt-12 lg:grid-cols-2'>
            <div className='relative flex flex-col gap-5 px-5 py-10 shadow-2xl sm:p-10 shadow-black-200'>
               <div className='absolute top-0 right-0'>
                  <img
                     src={currentProject.spotlight}
                     alt='spotlight'
                     className='object-cover w-full h-96 rounded-xl'
                  />
               </div>

               <div
                  className='p-3 rounded-lg backdrop-filter backdrop-blur-3xl w-fit'
                  style={currentProject.logoStyle}
               >
                  <img
                     className='w-10 h-10 shadow-sm'
                     src={currentProject.logo}
                     alt='logo'
                  />
               </div>

               <div className='flex flex-col gap-5 my-5 text-white-600'>
                  <p className='text-2xl font-semibold text-white animatedText'>
                     {currentProject.title}
                  </p>

                  <p className='animatedText'>{currentProject.desc}</p>
                  <p className='animatedText'>{currentProject.subdesc}</p>
               </div>

               <div className='flex flex-wrap items-center justify-between gap-5'>
                  <div className='flex items-center gap-3'>
                     {currentProject.tags.map((tag, index) => (
                        <div key={index + 1} className='tech-logo'>
                           <img src={tag.path} alt={tag.name} />
                        </div>
                     ))}
                  </div>

                  {/*
						<a
							className='flex items-center gap-2 cursor-pointer text-white-600'
							href={currentProject.href}
							target='_blank'
							rel='noreferrer'
						>
							<p>Check Live Site</p>
							<img
								src='/assets/arrow-up.png'
								alt='arrow'
								className='w-3 h-3'
							/>
						</a>
                  */}
               </div>

               <div className='flex items-center justify-between mt-7'>
                  <button
                     className='arrow-btn'
                     onClick={() => handleNavigation('previous')}
                  >
                     <img src='/assets/left-arrow.png' alt='left arrow' />
                  </button>

                  <button
                     className='arrow-btn'
                     onClick={() => handleNavigation('next')}
                  >
                     <img
                        src='/assets/right-arrow.png'
                        alt='right arrow'
                        className='w-4 h-4'
                     />
                  </button>
               </div>
            </div>

            <div className='border rounded-lg border-black-300 bg-black-200 h-96 md:h-full'>
               <Canvas>
                  <ambientLight intensity={Math.PI} />
                  <directionalLight position={[10, 10, 5]} />
                  <Center>
                     <Suspense fallback={<CanvasLoader />}>
                        <group
                           scale={2}
                           position={[0, -3, 0]}
                           rotation={[0, -0.1, 0]}
                        >
                           <DemoComputer texture={currentProject.texture} />
                        </group>
                     </Suspense>
                  </Center>
                  <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
               </Canvas>
            </div>
         </div>
      </section>
   );
}

export default Projects;

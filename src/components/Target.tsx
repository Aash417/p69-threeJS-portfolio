import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useRef } from 'react';
import * as Three from 'three';

function Target(props: { position: Three.Vector3 }) {
	const targetRef = useRef<Three.Mesh>(null!);
	const { scene } = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
	);

	useGSAP(() => {
		gsap.to(targetRef?.current?.position, {
			y: targetRef?.current?.position.y + 0.5,
			duration: 1.5,
			repeat: -1,
			yoyo: true,
		});
	});

	return (
		// <mesh {...props} ref={(element) => (targetRef as any) = element} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
		<mesh
			{...props}
			ref={targetRef as any}
			rotation={[0, Math.PI / 5, 0]}
			scale={1.5}
		>
			<primitive object={scene} />
		</mesh>
	);
}

export default Target;

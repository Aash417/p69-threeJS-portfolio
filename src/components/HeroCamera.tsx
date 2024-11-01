import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';
import * as THREE from 'three';

// allow use to control how we look at the model (hacker room)
function HeroCamera({
	isMobile,
	children,
}: Readonly<{
	isMobile: boolean;
	children: React.ReactNode;
}>) {
	const group = useRef(null!);

	// Make the camera follow the cursor movement
	useFrame((state, delta) => {
		const vector = new THREE.Vector3().copy(state.camera.position);
		easing.damp3(vector, [0, 0, 20], 0.25, delta);

		if (!isMobile && group.current) {
			easing.dampE(
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//  @ts-expect-error
				group.current.rotation,
				[-state.pointer.y / 3, state.pointer.x / 5, 0],
				0.25,
				delta
			);
		}
	});

	return <group ref={group}>{children}</group>;
}

export default HeroCamera;

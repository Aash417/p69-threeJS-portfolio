import { Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function ReactLogo(): JSX.Element {
	const { nodes, materials } = useGLTF('models/react.glb') as {
		nodes: Record<string, THREE.Object3D>;
		materials: Record<string, THREE.Material | THREE.Material[]>;
	};

	// Type guard to ensure the node is a Mesh before accessing geometry
	const reactLogoNode = nodes['React-Logo_Material002_0'];
	if (!(reactLogoNode instanceof THREE.Mesh)) {
		throw new Error('React logo node is not a Mesh');
	}

	return (
		<Float floatIntensity={1}>
			<group position={[8, 8, 0]} scale={0.4} dispose={null}>
				<mesh
					geometry={reactLogoNode.geometry}
					material={materials['Material.002']}
					position={[0, 0.079, 0.181]}
					rotation={[0, 0, -Math.PI / 2]}
					scale={[0.392, 0.392, 0.527]}
				/>
			</group>
		</Float>
	);
}

useGLTF.preload('models/react.glb');

export default ReactLogo;

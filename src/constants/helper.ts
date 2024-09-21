import * as THREE from 'three';
// Type guard function to check if an Object3D is a Mesh
export const isMesh = (node: THREE.Object3D | undefined): node is THREE.Mesh => {
	return node instanceof THREE.Mesh;
};

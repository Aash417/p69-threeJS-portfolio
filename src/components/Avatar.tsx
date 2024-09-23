/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useGraph } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SkeletonUtils } from 'three-stdlib';
import { isMesh } from '../constants/helper';

export default function Avatar({ animationName = 'rallying', ...props }) {
	const { scene } = useGLTF('/models/avatar/avatar.glb');
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
	const { nodes, materials } = useGraph(clone);
	const group = useRef(null!);

	const { animations: idleAnimation } = useFBX('/models/avatar/idle.fbx');
	const { animations: victoryAnimation } = useFBX('/models/avatar/victory.fbx');
	const { animations: clapAnimation } = useFBX('/models/avatar/clap.fbx');
	const { animations: rallyingAnimation } = useFBX('/models/avatar/rallying.fbx');

	idleAnimation[0].name = 'idle';
	rallyingAnimation[0].name = 'salute';
	clapAnimation[0].name = 'clapping';
	victoryAnimation[0].name = 'victory';

	const { actions } = useAnimations(
		[idleAnimation[0], rallyingAnimation[0], clapAnimation[0], victoryAnimation[0]],
		group
	);

	useEffect(() => {
		if (actions[animationName]) actions[animationName].reset().fadeIn(0.5).play();

		return () => {
			if (actions[animationName]) actions[animationName].fadeOut(0.5);
		};
	}, [animationName, actions]);

	return (
		<group ref={group} {...props} dispose={null}>
			<primitive object={nodes.Hips} />
			{isMesh(nodes.EyeLeft) && (
				<skinnedMesh
					name='EyeLeft'
					geometry={nodes.EyeLeft.geometry}
					material={materials.Wolf3D_Eye}
					skeleton={(nodes.EyeLeft as THREE.SkinnedMesh).skeleton}
					morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
					morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
				/>
			)}
			{isMesh(nodes.EyeRight) && (
				<skinnedMesh
					name='EyeRight'
					geometry={nodes.EyeRight.geometry}
					material={materials.Wolf3D_Eye}
					skeleton={(nodes.EyeRight as THREE.SkinnedMesh).skeleton}
					morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
					morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
				/>
			)}
			{isMesh(nodes.Wolf3D_Head) && (
				<skinnedMesh
					name='Wolf3D_Head'
					geometry={nodes.Wolf3D_Head.geometry}
					material={materials.Wolf3D_Skin}
					skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
					morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
					morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
				/>
			)}
			{isMesh(nodes.Wolf3D_Teeth) && (
				<skinnedMesh
					name='Wolf3D_Teeth'
					geometry={nodes.Wolf3D_Teeth.geometry}
					material={materials.Wolf3D_Teeth}
					skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
					morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
					morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
				/>
			)}
			{isMesh(nodes.Wolf3D_Hair) && (
				<skinnedMesh
					geometry={nodes.Wolf3D_Hair.geometry}
					material={materials.Wolf3D_Hair}
					skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
				/>
			)}
			{isMesh(nodes.Wolf3D_Glasses) && (
				<skinnedMesh
					geometry={nodes.Wolf3D_Glasses.geometry}
					material={materials.Wolf3D_Glasses}
					skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
				/>
			)}
			{isMesh(nodes.Wolf3D_Outfit_Top) && (
				<skinnedMesh
					geometry={nodes.Wolf3D_Outfit_Top.geometry}
					material={materials.Wolf3D_Outfit_Top}
					skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
				/>
			)}
			{isMesh(nodes.Wolf3D_Outfit_Bottom) && (
				<skinnedMesh
					geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
					material={materials.Wolf3D_Outfit_Bottom}
					skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
				/>
			)}
			{isMesh(nodes.Wolf3D_Outfit_Footwear) && (
				<skinnedMesh
					geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
					material={materials.Wolf3D_Outfit_Footwear}
					skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
				/>
			)}
			{isMesh(nodes.Wolf3D_Body) && (
				<skinnedMesh
					geometry={nodes.Wolf3D_Body.geometry}
					material={materials.Wolf3D_Body}
					skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
				/>
			)}
		</group>
	);
}
useGLTF.preload('/models/avatar/avatar.glb');
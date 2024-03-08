/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 baked.glb -T -j -p 6
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { animated, config, useSpring } from "@react-spring/three";
import { useAnimations } from "../hooks/useAnimations";

export function Baked(props) {
  const { nodes, materials } = useGLTF("/baked-transformed.glb");

  const { vrijstaandMainRotation, vrijstaandSecondRotation, vrijstaandThirdRotation, vrijstaandPosition1, vrijstaandPosition2, vrijstaandPosition3 } = useAnimations(props.closetsAnimation);

  return (
    <animated.group {...props} dispose={null}>
      <animated.mesh rotation={vrijstaandMainRotation} geometry={nodes.vrijstaand001_Baked.geometry} material={materials.MergedBake_Baked} position={[-1.72386, 0.707797, 0.023958]}>
        <animated.mesh rotation={vrijstaandSecondRotation} geometry={nodes.door_plate010_Baked.geometry} material={materials.MergedBake_Baked} position={[-0.100837, 0.168637, 0.10631]} />
        <animated.mesh rotation={vrijstaandThirdRotation} geometry={nodes.door_plate011_Baked.geometry} material={materials.MergedBake_Baked} position={[0.002153, 0.168637, 0.00332]} />
        <animated.mesh position={vrijstaandPosition1} geometry={nodes.schuif1_Baked.geometry} material={materials.MergedBake_Baked} />
        <animated.mesh position={vrijstaandPosition2} geometry={nodes.schuif2_Baked.geometry} material={materials.MergedBake_Baked} />
        <animated.mesh position={vrijstaandPosition3} geometry={nodes.schuif3_Baked.geometry} material={materials.MergedBake_Baked} />
      </animated.mesh>
    </animated.group>
  );
}

useGLTF.preload("/baked-transformed.glb");
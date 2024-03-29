/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 base.glb -T -j -p 6
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { path } from "../lib/globals";

export function Base(props) {
  const { nodes, materials } = useGLTF(path + "/base-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.top_panel_right003.geometry} material={nodes.top_panel_right003.material} />
    </group>
  );
}

useGLTF.preload(path + "/base-transformed.glb");

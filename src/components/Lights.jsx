import { Environment, Lightformer } from "@react-three/drei";
import React from "react";

export const Lights = () => {
  return (
    <>
      <Environment>
        <Lightformer form="circle" intensity={15} position={[0, 3, 5]} rotation={[-Math.PI / 4, 0, 0]} />
        <Lightformer form="circle" intensity={15} position={[5, 3, 5]} rotation={[0, Math.PI / 4, 0]} />
        <Lightformer form="circle" intensity={5} position={[0, 3, -5]} />
        <Lightformer form="circle" intensity={5} position={[0, 0, -5]} />
        <Lightformer form="circle" intensity={5} position={[0, 0, 5]} />
        <Lightformer form="circle" intensity={10} position={[5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        <Lightformer form="circle" intensity={8} position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        <Lightformer form="circle" intensity={8} position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]} />
        <Lightformer form="circle" intensity={10} position={[0, -5, 0]} rotation={[Math.PI / 2, 0, 0]} />
      </Environment>
    </>
  );
};

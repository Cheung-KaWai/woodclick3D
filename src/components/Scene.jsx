import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { Environment, Lightformer, OrbitControls, SoftShadows } from "@react-three/drei";
import { Closets } from "./Closets";
import { EffectComposer, N8AO } from "@react-three/postprocessing";

export const Scene = () => {
  return (
    <Container>
      <Canvas shadows>
        <OrbitControls />
        <Closets />
        <SoftShadows samples={16} />
        <ambientLight intensity={3} />
        <Environment background>
          <Lightformer form="circle" intensity={10} position={[0, 3, 5]} rotation={[-Math.PI / 4, 0, 0]} />
          <Lightformer form="circle" intensity={10} position={[5, 3, 5]} rotation={[0, Math.PI / 4, 0]} />
          <Lightformer form="circle" intensity={10} position={[0, 3, -5]} />
          <Lightformer form="circle" intensity={10} position={[0, 0, -5]} />
          <Lightformer form="circle" intensity={10} position={[5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
          <Lightformer form="circle" intensity={10} position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
          <Lightformer form="circle" intensity={10} position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]} />
        </Environment>
        {/* <EffectComposer>
          <N8AO intensity={5} samples={80} />
        </EffectComposer> */}
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100svw;
  height: 100svh;
`;

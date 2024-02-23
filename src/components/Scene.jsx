import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { Model } from "./Model";
import { OrbitControls } from "@react-three/drei";

export const Scene = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls />
        <Model />
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100svw;
  height: 100svh;
`;

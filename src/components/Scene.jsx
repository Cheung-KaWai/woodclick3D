import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Closets } from "./Closets";
import { Effects } from "./Effects";
import { Lights } from "./Lights";

export const Scene = () => {
  return (
    <Container>
      <Canvas>
        {/* <OrbitControls object-position={[0, 1.5, 2]} target={[0, 0, -1]} enableRotate={false} enablePan={false} enableZoom={false} /> */}
        <Closets />
        <Lights />
        <Effects />
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100svw;
  height: 100svh;
`;

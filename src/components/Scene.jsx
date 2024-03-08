import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Closets } from "./Closets";
import { Effects } from "./Effects";
import { Lights } from "./Lights";
import { OrbitControls } from "@react-three/drei";
import { Closets2 } from "../../Closets2";
import { Closets3 } from "../../Closets3";
import { NoToneMapping } from "three";
import { Closet4 } from "./Closet4";

export const Scene = () => {
  return (
    <Container>
      <Canvas camera={{ fov: 45 }} gl={{ toneMapping: NoToneMapping }}>
        {/* <Closets /> */}
        <Closets3 />
        <Lights />
        <Effects />
        {/* <Baked /> */}
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100svw;
  height: 50svh;
  position: relative;
  margin-bottom: 70px;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%);
    left: 0;
    top: 0;
    pointer-events: none;
  }
`;

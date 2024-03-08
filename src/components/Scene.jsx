import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import styled from "styled-components";
import { Effects } from "./Effects";
import { Lights } from "./Lights";

import { Closets3 } from "../../Closets3";
import { NoToneMapping } from "three";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

export const Scene = () => {
  const [index, setIndex] = useState(1);

  return (
    <Container>
      <Canvas camera={{ fov: 45 }} gl={{ toneMapping: NoToneMapping }}>
        {/* <Closets /> */}
        <Closets3 indexCam={index} setIndex={setIndex} />
        <Lights />
        <Effects />
        {/* <Baked /> */}
      </Canvas>
      <ContainerArrows>
        <ArrowLeft
          onClick={() => {
            if (index === 0) {
              setIndex(8);
            } else {
              setIndex((prev) => prev - 1);
            }
          }}
        >
          <FaLongArrowAltLeft size={24} />
        </ArrowLeft>
        <ArrowRight
          onClick={() => {
            if (index === 8) {
              setIndex(0);
            } else {
              setIndex((prev) => prev + 1);
            }
          }}
        >
          <FaLongArrowAltRight size={24} />
        </ArrowRight>
      </ContainerArrows>
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

const ContainerArrows = styled.div`
  position: relative;
  left: 50%;
  display: flex;
  width: 300px;
  justify-content: space-between;
  transform: translateX(-50%);
`;

const ArrowRight = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  color: #d2d2d2;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateX(5px);
    cursor: pointer;
  }
`;

const ArrowLeft = styled.div`
  /* border: 1px solid red; */
  cursor: pointer;
  padding: 10px;
  color: #d2d2d2;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateX(-5px);
  }
`;

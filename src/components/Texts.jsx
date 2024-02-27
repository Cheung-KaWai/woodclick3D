import { Html } from "@react-three/drei";
import React from "react";
import styled from "styled-components";

export const Texts = ({ closetsAnimation }) => {
  return (
    <>
      <Html center position={[-0.05, 1.2, 0]} transform>
        <Container $scale={closetsAnimation.schuin}>
          <LabelText>Schuin</LabelText>
        </Container>
      </Html>
      <Html center position={[1.3, 1.2, 0]} transform>
        <Container $scale={closetsAnimation.inbouw}>
          <LabelText>Inbouw</LabelText>
        </Container>
      </Html>
      <Html center position={[0.4, 1.2, 0]} transform>
        <Container $scale={closetsAnimation.zwevend}>
          <LabelText>Zwevend</LabelText>
        </Container>
      </Html>
      <Html center position={[0.9, 1.2, 0]} transform>
        <Container $scale={closetsAnimation.vrijstaand}>
          <LabelText>Vrijstaand</LabelText>
        </Container>
      </Html>
      <Html center position={[-0.7, 1.2, 0]} transform>
        <Container $scale={closetsAnimation.uShape}>
          <LabelText>U-vorm</LabelText>
        </Container>
      </Html>
      <Html center position={[-1.25, 1.2, 0]} transform>
        <Container $scale={closetsAnimation.lShape}>
          <LabelText>L-vorm</LabelText>
        </Container>
      </Html>
      <Html center position={[0, -0.3, 0.2]} transform>
        <Container $scale={closetsAnimation.dressoir}>
          <LabelText>Dressoir</LabelText>
        </Container>
      </Html>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.2rem;
  height: 0.4rem;
  background-color: #f0f0f0;
  font-size: 0.15rem;
  line-height: 0.15rem;
  transform: ${(props) => (props.$scale ? "scale(1)" : "scale(0)")};
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
`;

const LabelText = styled.p`
  font-family: Helvetica, sans-serif;
`;

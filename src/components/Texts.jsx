import { Html } from "@react-three/drei";
import React from "react";
import styled from "styled-components";

export const Texts = ({ closetsAnimation }) => {
  return (
    <>
      <Html center position={[0.6, 1.1, 0]}>
        <Link href="https://woodclick.fluxwebdesign.be/onze-kasten/configurator/?template=schuine-kast">
          <Container $scale={closetsAnimation.schuin} className="label_container">
            <LabelText className="label_text">Schuin</LabelText>
          </Container>
        </Link>
      </Html>
      <Html center position={[-1.31, 1.1, 0]} className="label_container">
        <Link href="https://woodclick.fluxwebdesign.be/onze-kasten/configurator/?template=ingebouwde-kast">
          <Container $scale={closetsAnimation.inbouw}>
            <LabelText className="label_text">Inbouw</LabelText>
          </Container>
        </Link>
      </Html>
      <Html center position={[-0.5, 0.9, 0]} className="label_container">
        <Link href="https://woodclick.fluxwebdesign.be/onze-kasten/configurator/?template=zwevende-kast">
          <Container $scale={closetsAnimation.zwevend}>
            <LabelText className="label_text">Zwevend</LabelText>
          </Container>
        </Link>
      </Html>
      <Html center position={[0.05, 0.9, 0]} className="label_container">
        <Link href="https://woodclick.fluxwebdesign.be/onze-kasten/configurator/?template=zwevende-kast">
          <Container $scale={closetsAnimation.zwevend2}>
            <LabelText className="label_text">Zwevend 2</LabelText>
          </Container>
        </Link>
      </Html>
      <Html center position={[-1.72, 1.1, 0]} className="label_container">
        <Link href="https://woodclick.fluxwebdesign.be/configurator/?template=vrijstaande-kast">
          <Container $scale={closetsAnimation.vrijstaand}>
            <LabelText className="label_text">Vrijstaand</LabelText>
          </Container>
        </Link>
      </Html>
      <Html center position={[1.68, 1.1, 0]} className="label_container">
        <Link href="https://woodclick.fluxwebdesign.be/onze-kasten/configurator/?template=inbouwkast-u-vorm">
          <Container $scale={closetsAnimation.uShape}>
            <LabelText className="label_text">U-vorm</LabelText>
          </Container>
        </Link>
      </Html>
      <Html center position={[1.1, 1.1, 0]} className="label_container">
        <Link href="https://woodclick.fluxwebdesign.be/onze-kasten/configurator/?template=kast-in-l-vorm">
          <Container $scale={closetsAnimation.lShape}>
            <LabelText className="label_text">L-vorm</LabelText>
          </Container>
        </Link>
      </Html>
      <Html center position={[-0.95, 0.87, 0]} className="label_container">
        <Link href="https://woodclick.fluxwebdesign.be/onze-kasten/configurator/?template=dressoir">
          <Container $scale={closetsAnimation.dressoir}>
            <LabelText className="label_text">Dressoir</LabelText>
          </Container>
        </Link>
      </Html>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 30px;
  background-color: #f0f0f0;
  font-size: 14px;
  line-height: 14px;
  white-space: nowrap;
  transform: ${(props) => (props.$scale ? "scale(1)" : "scale(0)")};
  transition: all 0.3s ease-in-out;
  border-radius: 15px;
  pointer-events: none;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const LabelText = styled.p`
  font-family: Helvetica, sans-serif;
  pointer-events: none;
`;

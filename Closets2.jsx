/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/closets2.glb -T -j -k -p 6
*/

import React, { useRef, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { animated, config, useSpring } from "@react-spring/three";
import { useAnimations } from "./src/hooks/useAnimations";
import { Texts } from "./src/components/Texts";

export function Closets2(props) {
  const { nodes, materials } = useGLTF("/closets2-transformed.glb");

  const camRef = useRef();
  const [closetsAnimation, setClosets] = useState({
    inbouw: false,
    vrijstaand: false,
    schuin: false,
    zwevend: false,
    zwevend2: false,
    uShape: false,
    lShape: false,
    dressoir: false,
  });
  const [currentCloset, setCurrentCloset] = useState(null);

  const resetClosets = () => {
    setClosets({ inbouw: false, vrijstaand: false, schuin: false, zwevend: false, zwevend2: false, uShape: false, lShape: false, dressoir: false });
  };

  const [camPos, setCamPos] = useState([0, 1.4, 2]);
  const [camTarget, setTarget] = useState([0, 0, -1]);
  const Controls = animated(OrbitControls);

  const {
    inbouwPosition1,
    inbouwPosition2,
    inbouwPosition3,
    inbouwMainRotation,
    inbouwSecondRotation,
    inbouwThirdRotation,
    vrijstaandMainRotation,
    vrijstaandSecondRotation,
    vrijstaandThirdRotation,
    vrijstaandPosition1,
    vrijstaandPosition2,
    vrijstaandPosition3,
    schuinMainRotation,
    schuinSecondRotation,
    schuinThirdRotation,
    schuinPosition1,
    schuinPosition2,
    schuinPosition3,
    zwevendMainRotation,
    zwevendSecondRotation,
    zwevendThirdRotation,
    zwevendMainRotation2,
    zwevendSecondRotation2,
    zwevendThirdRotation2,
    uShapeMainRotation,
    uShapePosition1,
    uShapePosition2,
    uShapePosition3,
    lShapeMainRotation,
    lShapeSecondRotation,
    lShapeThirdRotation,
    dressoirRotation,
    dressoirSecondRotation,
    dressoirThirdRotation,
  } = useAnimations(closetsAnimation);

  const { position, target } = useSpring({
    position: camPos,
    target: camTarget,
    config: config.molasses,
  });

  return (
    <>
      <animated.group
        {...props}
        dispose={null}
        onPointerMissed={() => {
          setCamPos([0, 1.4, 2]);
          setTarget([0, 0, -1]);
        }}
      >
        <animated.mesh
          name="inbouw002"
          geometry={nodes.inbouw002.geometry}
          material={materials["rice paper"]}
          position={[-1.306451, 0.705525, 0.036966]}
          onPointerDown={() => {
            resetClosets();
            setCamPos([-1.3, 0.9, 0.8]);
            setTarget([-1.3, 0.9, 0]);
            setCurrentCloset("inbouw");
            setClosets((prev) => ({ ...prev, inbouw: true }));
          }}
          onPointerEnter={() => {
            setClosets((prev) => ({ ...prev, inbouw: true }));
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            if (currentCloset !== "inbouw") {
              setClosets((prev) => ({ ...prev, inbouw: false }));
            }
            document.body.style.cursor = "default";
          }}
          rotation={inbouwMainRotation}
        >
          <animated.mesh rotation={inbouwSecondRotation} name="door_plate006" geometry={nodes.door_plate006.geometry} material={materials["rice paper"]} position={[-0.099352, 0.164887, 0.104825]} />
          <animated.mesh rotation={inbouwThirdRotation} name="door_plate007" geometry={nodes.door_plate007.geometry} material={materials["rice paper"]} position={[0.004062, 0.164887, 0.001411]} />
          <animated.mesh rotation={inbouwSecondRotation} name="door_plate008" geometry={nodes.door_plate008.geometry} material={materials["rice paper"]} position={[0.001411, 0.164887, 0.004062]} />
          <animated.mesh rotation={inbouwThirdRotation} name="door_plate009" geometry={nodes.door_plate009.geometry} material={materials["rice paper"]} position={[0.104825, 0.164887, -0.099352]} />
          <animated.mesh name="inbouw003" geometry={nodes.inbouw003.geometry} material={materials["rice paper"]} position={inbouwPosition1} />
          <animated.mesh name="inbouw004" geometry={nodes.inbouw004.geometry} material={materials["rice paper"]} position={inbouwPosition2} />
          <animated.mesh name="inbouw005" geometry={nodes.inbouw005.geometry} material={materials["rice paper"]} position={inbouwPosition3} />
        </animated.mesh>
        <animated.mesh
          name="schuin001"
          geometry={nodes.schuin001.geometry}
          material={materials.quartz}
          position={[0.579829, 0.70254, 0.070995]}
          rotation={schuinMainRotation}
          onPointerDown={() => {
            resetClosets();
            setCamPos([0.6, 0.9, 0.8]);
            setTarget([0.6, 0.9, 0]);
            setCurrentCloset("schuin");
            setClosets((prev) => ({ ...prev, schuin: true }));
          }}
          onPointerEnter={() => {
            setClosets((prev) => ({ ...prev, schuin: true }));
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            if (currentCloset !== "schuin") {
              setClosets((prev) => ({ ...prev, schuin: false }));
            }
            document.body.style.cursor = "default";
          }}
        >
          <animated.mesh rotation={schuinSecondRotation} name="door_plate012" geometry={nodes.door_plate012.geometry} material={materials.quartz} position={[-0.096205, 0.164888, 0.101678]} />
          <animated.mesh rotation={schuinThirdRotation} name="door_plate013" geometry={nodes.door_plate013.geometry} material={materials.quartz} position={[0.004522, 0.164888, 0.000951]} />
          <animated.mesh rotation={schuinSecondRotation} name="door_plate014" geometry={nodes.door_plate014.geometry} material={materials.quartz} position={[0.006254, 0.164888, -0.000781]} />
          <animated.mesh rotation={schuinThirdRotation} name="door_plate015" geometry={nodes.door_plate015.geometry} material={materials.quartz} position={[0.106982, 0.164888, -0.101509]} />
          <animated.mesh name="schuif1001" geometry={nodes.schuif1001.geometry} material={materials.quartz} position={schuinPosition1} />
          <animated.mesh name="schuif2001" geometry={nodes.schuif2001.geometry} material={materials.quartz} position={schuinPosition2} />
          <animated.mesh name="schuif3001" geometry={nodes.schuif3001.geometry} material={materials.quartz} position={schuinPosition3} />
        </animated.mesh>
        <animated.mesh
          rotation={lShapeMainRotation}
          name="lshape"
          geometry={nodes.lshape.geometry}
          material={materials.seashell}
          position={[1.128124, 0.705958, 0.01079]}
          onPointerDown={() => {
            resetClosets();
            setCamPos([1.1, 0.9, 0.8]);
            setTarget([1.1, 0.9, 0]);
            setCurrentCloset("lShape");
            setClosets((prev) => ({ ...prev, lShape: true }));
          }}
          onPointerEnter={() => {
            setClosets((prev) => ({ ...prev, lShape: true }));
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            if (currentCloset !== "lShape") {
              setClosets((prev) => ({ ...prev, lShape: false }));
            }
            document.body.style.cursor = "default";
          }}
        >
          <animated.mesh rotation={lShapeSecondRotation} name="door_plate020" geometry={nodes.door_plate020.geometry} material={materials.seashell} position={[-0.104868, 0.168638, 0.11034]} />
          <animated.mesh rotation={lShapeThirdRotation} name="door_plate021" geometry={nodes.door_plate021.geometry} material={materials.seashell} position={[0.00682, 0.168638, -0.001347]} />
          <animated.mesh rotation={lShapeSecondRotation} name="door_plate022" geometry={nodes.door_plate022.geometry} material={materials.seashell} position={[0.008199, 0.168638, -0.002726]} />
          <animated.mesh rotation={lShapeThirdRotation} name="door_plate023" geometry={nodes.door_plate023.geometry} material={materials.seashell} position={[0.119886, 0.168638, -0.114413]} />
        </animated.mesh>
        <animated.mesh
          rotation={vrijstaandMainRotation}
          name="vrijstaand001"
          geometry={nodes.vrijstaand001.geometry}
          material={materials.Silicon}
          position={[-1.72386, 0.707797, 0.023958]}
          onPointerDown={() => {
            resetClosets();
            setCamPos([-1.7, 0.9, 0.8]);
            setTarget([-1.7, 0.9, 0]);
            setCurrentCloset("vrijstaand");
            setClosets((prev) => ({ ...prev, vrijstaand: true }));
          }}
          onPointerEnter={() => {
            setClosets((prev) => ({ ...prev, vrijstaand: true }));
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            if (currentCloset !== "vrijstaand") {
              setClosets((prev) => ({ ...prev, vrijstaand: false }));
            }
            document.body.style.cursor = "default";
          }}
        >
          <animated.mesh rotation={vrijstaandSecondRotation} name="door_plate010" geometry={nodes.door_plate010.geometry} material={materials.Silicon} position={[-0.100837, 0.168637, 0.10631]} />
          <animated.mesh rotation={vrijstaandThirdRotation} name="door_plate011" geometry={nodes.door_plate011.geometry} material={materials.Silicon} position={[0.002153, 0.168637, 0.00332]} />
          <animated.mesh name="schuif1" geometry={nodes.schuif1.geometry} material={materials.Silicon} position={vrijstaandPosition1} />
          <animated.mesh name="schuif2" geometry={nodes.schuif2.geometry} material={materials.Silicon} position={vrijstaandPosition2} />
          <animated.mesh name="schuif3" geometry={nodes.schuif3.geometry} material={materials.Silicon} position={vrijstaandPosition3} />
        </animated.mesh>
        <animated.group
          name="zwevend"
          position={[-0.491127, 0.804421, 0.035782]}
          rotation={zwevendMainRotation}
          onPointerDown={() => {
            resetClosets();
            setCamPos([-0.5, 0.9, 0.8]);
            setTarget([-0.5, 0.9, 0]);
            setCurrentCloset("zwevend");
            setClosets((prev) => ({ ...prev, zwevend: true }));
          }}
          onPointerEnter={() => {
            setClosets((prev) => ({ ...prev, zwevend: true }));
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            if (currentCloset !== "zwevend") {
              setClosets((prev) => ({ ...prev, zwevend: false }));
            }
            document.body.style.cursor = "default";
          }}
        >
          <animated.mesh name="Mesh_25007" geometry={nodes.Mesh_25007.geometry} material={materials.quartz} />
          <animated.mesh name="Mesh_25007_1" geometry={nodes.Mesh_25007_1.geometry} material={materials["everest white"]} />
          <animated.mesh rotation={zwevendSecondRotation} name="door_plate016" geometry={nodes.door_plate016.geometry} material={materials["everest white"]} position={[-0.108962, 0.000681, 0.206054]} />
          <animated.mesh rotation={zwevendThirdRotation} name="door_plate017" geometry={nodes.door_plate017.geometry} material={materials["everest white"]} position={[-0.003532, 0.000681, 0.100625]} />
          <animated.mesh rotation={zwevendSecondRotation} name="door_plate018" geometry={nodes.door_plate018.geometry} material={materials["everest white"]} position={[0.100625, 0.000681, -0.003532]} />
          <animated.mesh rotation={zwevendThirdRotation} name="door_plate019" geometry={nodes.door_plate019.geometry} material={materials["everest white"]} position={[0.206055, 0.000681, -0.108962]} />
        </animated.group>
        <animated.mesh
          rotation={uShapeMainRotation}
          name="uShape00"
          geometry={nodes.uShape00.geometry}
          material={materials["front white"]}
          position={[1.680972, 0.710548, -0.034334]}
          onPointerDown={() => {
            resetClosets();
            setCamPos([1.7, 0.9, 0.8]);
            setTarget([1.7, 0.9, 0]);
            setCurrentCloset("uShape");
            setClosets((prev) => ({ ...prev, uShape: true }));
          }}
          onPointerEnter={() => {
            setClosets((prev) => ({ ...prev, uShape: true }));
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            if (currentCloset !== "uShape") setClosets((prev) => ({ ...prev, uShape: false }));
            document.body.style.cursor = "default";
          }}
        >
          <animated.mesh position={uShapePosition1} name="back_panel_bottom002" geometry={nodes.back_panel_bottom002.geometry} material={materials["front white"]} />
          <animated.mesh position={uShapePosition2} name="back_panel_bottom003" geometry={nodes.back_panel_bottom003.geometry} material={materials["front white"]} />
          <animated.mesh position={uShapePosition3} name="back_panel_bottom004" geometry={nodes.back_panel_bottom004.geometry} material={materials["front white"]} />
        </animated.mesh>
        <animated.mesh
          rotation={dressoirRotation}
          name="dressoir001"
          geometry={nodes.dressoir001.geometry}
          material={materials["stone gray"]}
          position={[-0.929325, 0.76046, 0.020676]}
          onPointerDown={() => {
            resetClosets();
            setCamPos([-0.9, 0.9, 0.8]);
            setTarget([-0.9, 0.9, 0]);
            setCurrentCloset("dressoir");
            setClosets((prev) => ({ ...prev, dressoir: true }));
          }}
          onPointerEnter={() => {
            setClosets((prev) => ({ ...prev, dressoir: true }));
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            if (currentCloset !== "dressoir") {
              setClosets((prev) => ({ ...prev, dressoir: false }));
            }
            document.body.style.cursor = "default";
          }}
        >
          <animated.mesh rotation={dressoirSecondRotation} name="door_plate" geometry={nodes.door_plate.geometry} material={materials["stone gray"]} position={[-0.061631, 0.003299, 0.144102]} />
          <animated.mesh rotation={dressoirThirdRotation} name="door_plate001" geometry={nodes.door_plate001.geometry} material={materials["stone gray"]} position={[0.039945, 0.003299, 0.042526]} />
          <animated.mesh rotation={dressoirSecondRotation} name="door_plate002" geometry={nodes.door_plate002.geometry} material={materials["stone gray"]} position={[0.042526, 0.003299, 0.039945]} />
          <animated.mesh rotation={dressoirThirdRotation} name="door_plate003" geometry={nodes.door_plate003.geometry} material={materials["stone gray"]} position={[0.144101, 0.003299, -0.061631]} />
        </animated.mesh>
        <animated.mesh
          name="zwevend001"
          geometry={nodes.zwevend001.geometry}
          material={nodes.zwevend001.material}
          position={[0.029038, 0.804421, 0.041993]}
          rotation={zwevendMainRotation2}
          onPointerDown={() => {
            resetClosets();
            setCamPos([0, 0.9, 0.8]);
            setTarget([0, 0.9, 0]);
            setCurrentCloset("zwevend2");
            setClosets((prev) => ({ ...prev, zwevend2: true }));
          }}
          onPointerEnter={() => {
            setClosets((prev) => ({ ...prev, zwevend2: true }));
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            if (currentCloset !== "zwevend2") {
              setClosets((prev) => ({ ...prev, zwevend2: false }));
            }
            document.body.style.cursor = "default";
          }}
        >
          <animated.mesh rotation={zwevendSecondRotation2} name="door_plate004" geometry={nodes.door_plate004.geometry} material={nodes.door_plate004.material} position={[-0.108962, 0.000681, 0.206054]} />
          <animated.mesh rotation={zwevendThirdRotation2} name="door_plate005" geometry={nodes.door_plate005.geometry} material={nodes.door_plate005.material} position={[-0.003532, 0.000681, 0.100625]} />
          <animated.mesh rotation={zwevendSecondRotation2} name="door_plate024" geometry={nodes.door_plate024.geometry} material={nodes.door_plate024.material} position={[0.100625, 0.000681, -0.003532]} />
          <animated.mesh rotation={zwevendThirdRotation2} name="door_plate025" geometry={nodes.door_plate025.geometry} material={nodes.door_plate025.material} position={[0.206054, 0.000681, -0.108962]} />
        </animated.mesh>
        <animated.mesh name="Plane003" geometry={nodes.Plane003.geometry} material={nodes.Plane003.material} position={[0.008123, 0.690397, 0.005584]} />
      </animated.group>
      <Texts closetsAnimation={closetsAnimation} />
      <Controls ref={camRef} makeDefault={true} target={target} object-position={position} enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
}

useGLTF.preload("/closets2-transformed.glb");
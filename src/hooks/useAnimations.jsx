import { config, useSpring } from "@react-spring/three";
import React from "react";

export const useAnimations = (closets) => {
  const inbouwRotations = useSpring({
    inbouwMainRotation: [0, closets.inbouw ? -Math.PI / 4 : 0, 0],
    inbouwSecondRotation: [0, closets.inbouw ? -Math.PI / 2 : 0, 0],
    inbouwThirdRotation: [0, closets.inbouw ? Math.PI / 2 : 0, 0],
    delay: closets.inbouw ? 0 : 200,
  });

  const inbouwPositions = useSpring({
    inbouwPosition1: [closets.inbouw ? -0.027512 + 0.015 : -0.027512, 0.093833, closets.inbouw ? -0.027512 + 0.015 : -0.027512],
    inbouwPosition2: [closets.inbouw ? -0.027511 + 0.035 : -0.027511, 0.059933, closets.inbouw ? -0.027511 + 0.035 : -0.027511],
    inbouwPosition3: [closets.inbouw ? -0.02751 + 0.055 : -0.02751, 0.026033, closets.inbouw ? -0.02751 + 0.055 : -0.02751],
    delay: closets.inbouw ? 200 : 0,
  });

  const vrijstaandRotations = useSpring({
    vrijstaandMainRotation: [0, closets.vrijstaand ? -Math.PI / 4 : 0, 0],
    vrijstaandSecondRotation: [0, closets.vrijstaand ? -Math.PI / 2 : 0, 0],
    vrijstaandThirdRotation: [0, closets.vrijstaand ? Math.PI / 2 : 0, 0],
    delay: closets.vrijstaand ? 0 : 200,
  });

  const vrijstaandPositions = useSpring({
    vrijstaandPosition1: [closets.vrijstaand ? 0.015 : 0, 0, closets.vrijstaand ? 0.015 : 0],
    vrijstaandPosition2: [closets.vrijstaand ? 0.035 : 0, 0, closets.vrijstaand ? 0.035 : 0],
    vrijstaandPosition3: [closets.vrijstaand ? 0.055 : 0, 0, closets.vrijstaand ? 0.055 : 0],
    delay: closets.vrijstaand ? 200 : 0,
  });

  const schuinRotations = useSpring({
    schuinMainRotation: [0, closets.schuin ? -Math.PI / 4 : 0, 0],
    schuinSecondRotation: [0, closets.schuin ? -Math.PI / 2 : 0, 0],
    schuinThirdRotation: [0, closets.schuin ? Math.PI / 2 : 0, 0],
    delay: closets.schuin ? 0 : 200,
  });

  const schuinPositions = useSpring({
    schuinPosition1: [closets.schuin ? 0.015 : 0, 0, closets.schuin ? 0.015 : 0],
    schuinPosition2: [closets.schuin ? 0.035 : 0, 0, closets.schuin ? 0.035 : 0],
    schuinPosition3: [closets.schuin ? 0.055 : 0, 0, closets.schuin ? 0.055 : 0],
    delay: closets.schuin ? 200 : 0,
  });

  const zwevendRotations = useSpring({
    zwevendMainRotation: [0, closets.zwevend ? -Math.PI / 4 : 0, 0],
    zwevendSecondRotation: [0, closets.zwevend ? -Math.PI / 2 : 0, 0],
    zwevendThirdRotation: [0, closets.zwevend ? Math.PI / 2 : 0, 0],
    delay: closets.zwevend ? 0 : 200,
  });

  const uShapeRotations = useSpring({
    uShapeMainRotation: [0, closets.uShape ? -Math.PI / 4 : 0, 0],
    delay: closets.uShape ? 0 : 200,
  });

  const uShapePositions = useSpring({
    uShapePosition1: [closets.uShape ? 0.015 : 0, 0, closets.uShape ? 0.015 : 0],
    uShapePosition2: [closets.uShape ? 0.035 : 0, 0, closets.uShape ? 0.035 : 0],
    uShapePosition3: [closets.uShape ? 0.055 : 0, 0, closets.uShape ? 0.055 : 0],
    delay: closets.uShape ? 200 : 0,
  });

  const lShapeRotations = useSpring({
    lShapeMainRotation: [0, closets.lShape ? -Math.PI / 4 : 0, 0],
    lShapeSecondRotation: [0, closets.lShape ? -Math.PI / 2 : 0, 0],
    lShapeThirdRotation: [0, closets.lShape ? Math.PI / 2 : 0, 0],
    delay: closets.lShape ? 0 : 200,
  });

  return {
    ...inbouwPositions,
    ...inbouwRotations,
    ...vrijstaandRotations,
    ...vrijstaandPositions,
    ...schuinRotations,
    ...schuinPositions,
    ...zwevendRotations,
    ...uShapeRotations,
    ...uShapePositions,
    ...lShapeRotations,
  };
};

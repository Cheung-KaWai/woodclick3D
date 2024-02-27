import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { Leva, useControls } from "leva";
import React from "react";

// aoRadius?: number;
// distanceFalloff?: number;
// intensity?: number;
// quality?: 'performance' | 'low' | 'medium' | 'high' | 'ultra';
// aoSamples?: number;
// denoiseSamples?: number;
// denoiseRadius?: number;
// color?: ReactThreeFiber.Color;
// halfRes?: boolean;
// depthAwareUpsampling?: boolean;
// screenSpaceRadius?: boolean;
// renderMode?: 0 | 1 | 2 | 3 | 4;

export const Effects = () => {
  const props = useControls({
    aoRadius: {
      min: 0,
      max: 1,
      value: 1,
      step: 0.01,
    },
    intensity: {
      min: 0,
      max: 2,
      value: 1,
      step: 0.01,
    },
    distanceFalloff: {
      min: 0,
      max: 5,
      value: 1,
      step: 0.01,
    },
    aoSamples: {
      min: 1,
      max: 16,
      value: 8,
      step: 1,
    },
  });

  return (
    <>
      <Leva hidden />
      <EffectComposer disableNormalPass>
        <N8AO {...props} />
      </EffectComposer>
    </>
  );
};

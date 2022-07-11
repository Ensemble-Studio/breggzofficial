import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";

import { useRef, Suspense } from "react";

import {
  OrbitControls,
  Reflector,
  useTexture,
  Shadow,
  SpotLight,
  AmbientLight,
  PerspectiveCamera,
  Environment,
  Backdrop,
  Base,
  Stage,
  Sky
} from "@react-three/drei";
import Model from "./Model";
import ModelShadow from "./ModelShadow";


const Scene = () => {
  const shadow = useRef();

  return (
    <Canvas shadows legacy={true} gl={{ alpha: true, physicallyCorrectLights: true }}>
     <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

{/*      
           <ambientLight
        color='#ffffff'
        position={[1, 10, 25]}
        intensity={1}
      />   */}
       <PerspectiveCamera makeDefault position={[6,30,10]}/>


<ModelShadow/>

  

<Sky/>

    </Canvas>
  );
};

const Render = () => {
  return (
    <Suspense>
      <Scene />
    </Suspense>
  );
};

export default Render;

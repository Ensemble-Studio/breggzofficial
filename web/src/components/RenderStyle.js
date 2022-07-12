import { Canvas } from "@react-three/fiber";
import { useRef, Suspense } from "react";

import {
  OrbitControls,
  PerspectiveCamera,
  Sky
} from "@react-three/drei";

import ModelShadow from "./ModelShadow";

const Scene = () => {
  const shadow = useRef();

  return (
    <Canvas shadows legacy={true} gl={{ alpha: true, physicallyCorrectLights: true }}>

     <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
       <PerspectiveCamera makeDefault position={[6,30,10]}/>
<ModelShadow/>

<Sky/>
  


    </Canvas>
  );
};

const RenderStyle = () => {
  return (
    <Suspense>
      <Scene />
    </Suspense>
  );
};

export default RenderStyle;

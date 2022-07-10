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
  Stage
} from "@react-three/drei";
import Model from "./Model";


const Scene = () => {
  const shadow = useRef();

  return (
    <Canvas shadows legacy={true} gl={{ alpha: true, physicallyCorrectLights: true }}
    >
    

    <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

            
      <PerspectiveCamera makeDefault position={[3, 1, 2]} />
      <directionalLight
        color='#ffffff'
        position={[10, 14, 15]}
        intensity={3}
      />
  

      <ambientLight args={["#ffffff", 1]} position={[0, 0, 1]} />
     
    

<Model />
  


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

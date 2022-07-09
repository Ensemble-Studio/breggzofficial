import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";

import { useRef } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls, Sphere, MeshWobbleMaterial } from "@react-three/drei";

const Breggz = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const obj = useLoader(OBJLoader, "/breggz_render.obj");

  useFrame(
    (state, delta) => (
      (mesh.current.rotation.y += 0.001), (mesh.current.rotation.x += 0.001)
    )
  );

  return (
    <mesh {...props} ref={mesh} scale={0.2}>
      <primitive object={obj} scale={0.9} />
    </mesh>
  );
};

const Background = ({ position }) => {
  return (
    <mesh>
      <planeBufferGeometry position={position} args={[9, 9]} />
      {/* <meshStandardMaterial color='#00ff00' /> */}
    </mesh>
  );
};
const Blob = ({ position }) => {
  return (
    <Sphere visible position={position} args={[0.2, 60, 200]}>
      <MeshWobbleMaterial
        attach='material'
        color='#EB1E99'
        factor={1} // Strength, 0 disables the effect (default=1)
        speed={0} // Speed (default=1)
        roughness={0}
      />
    </Sphere>
  );
};

const Scene = () => {
  return (
    <Canvas pixelRatio={[1, 2]} camera={{ fov: 70 }}>
      {/* <Canvas pixelRatio={[1, 2]} camera={{ position: [-15, 5, 5], fov: 50 }}> */}
      <directionalLight position={[2, 10, 5]} intensity={1} />

      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} />
      {/* <Background position={[1, 1, 1]} /> */}

      <Breggz position={[1, 1, 1]} />
      {/* <Blob position={[-2, 1, 1]} /> */}
      <OrbitControls />
    </Canvas>
  );
};

const Render = () => {
  return <Scene />;
};

export default Render;

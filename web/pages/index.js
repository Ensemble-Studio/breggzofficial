import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Cookie from "../src/components/Cookie";

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const obj = useLoader(OBJLoader, "/breggzdevice.obj");
  useFrame((state, delta) => (mesh.current.rotation.x += 0.002));

  return (
    <mesh {...props} ref={mesh} scale={0.2}>
      <primitive object={obj} scale={0.9} />;
    </mesh>
  );
};

const Home = () => {
  return (
    <>
      <main className='absolute top-0 left-0 w-screen md:w-1/2 h-screen md:px-16 z-40 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-start items-center gap-8'>
          <div className='flex flex-col justify-start items-center relative gap-4'>
            <span className='leading-[80%] text-[120px] text-center uppercase text-[#f34606]'>
              stay tuned
            </span>
            <p className=' opacity-80 text-sm italic text-left text-[#f34606]'>
              (pun intended)
            </p>
          </div>
          <div className='flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[25px]'>
            <div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0'>
              <div className='flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2'>
                <div className='flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2 border-t-0 border-r-0 border-b border-l-0 border-[#f34606]'>
                  <a className='flex-grow-0 flex-shrink-0 text-lg text-left capitalize text-[#f34606]'>
                    Follow us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className='w-screen h-screen bg-pearl fixed top-0 left-0'>
        <Canvas
          pixelRatio={[1, 2]}
          camera={{ position: [-10, 15, 15], fov: 20 }}
        >
          <ambientLight />
          <pointLight position={[20, 20, 10]} />
          <Box position={[2.2, 1, 1]} />
          <OrbitControls />
          {/* <Scene /> */}
        </Canvas>
      </div>

      <Cookie />
    </>
  );
};

export default Home;

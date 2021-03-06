/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from "three";


import React, { useRef } from "react";
import { useGLTF} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {  useLoader, useThree, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/breggz_render.gltf");

 


  useFrame(
    (state, delta) => (
      (group.current.rotation.y += 0.001), (group.current.rotation.x += 0.001)
    )
  );
 

  return (
    <group ref={group} {...props} dispose={null} scale={0.1} position={[1.4,0,0]}>
  

<mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Body_03-29-2022"].geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Body_03-29-2022"].material
        }
        rotation={[Math.PI / 2, 0, 0]}
        >

        <meshLambertMaterial 
          reflectivity={9}
          refractionRatio
             
          opacity={0.9}
          side={THREE.FrontSide}
          transparent
          color='#ffffff'
    emissive='#ffffff'
          shininess={10}
          specular='#ffffff'
         />
   
             </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Main_Gasket_03-29-2022"]
            .geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Main_Gasket_03-29-2022"]
            .material
        }
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Components_03-29-2022001"]
            .geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Components_03-29-2022001"]
            .material
        }
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Cap_03-29-2022"].geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Cap_03-29-2022"].material
        }
        rotation={[Math.PI / 2, 0, 0]} >

        <meshLambertMaterial 
          reflectivity={9}
          refractionRatio
             
          opacity={0.9}
          side={THREE.FrontSide}
          transparent
          color='#ffffff'
    emissive='#ffffff'
          shininess={10}
          specular='#ffffff'
         />
   
             </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Screw_03-29-2022"].geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Screw_03-29-2022"].material
        }
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Mics_Gaskets_03-29-2022"]
            .geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Mics_Gaskets_03-29-2022"]
            .material
        }
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Breggz_Coen_Left_Ear_BA_03-29-2022"].geometry}
        material={nodes["Breggz_Coen_Left_Ear_BA_03-29-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Breggz_Coen_Left_Ear_BA_Gasket_03-29-2022"].geometry}
        material={nodes["Breggz_Coen_Left_Ear_BA_Gasket_03-29-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_BA_Flex_Wing_03-29-2022"].geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_BA_Flex_Wing_03-29-2022"].material
        }
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Breggz_Coen_Left_BA_Filter_03-29-2022"].geometry}
        material={nodes["Breggz_Coen_Left_BA_Filter_03-29-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Screw_Gasket_03-29-2022"]
            .geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Screw_Gasket_03-29-2022"]
            .material
        }
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Mics_Filters_03-29-2022"]
            .geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Mics_Filters_03-29-2022"]
            .material
        }
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Breggz_Coen_Left_Ear_Body_Magnet_03-29-2022"].geometry}
        material={nodes["Breggz_Coen_Left_Ear_Body_Magnet_03-29-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Charging_Contacts_03-29-2022"]
            .geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Charging_Contacts_03-29-2022"]
            .material
        }
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Faceplate_03-29-2022_NO_logo"].geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Faceplate_03-29-2022_NO_logo"].material
        }
        rotation={[Math.PI / 2, 0, 0]}
        >

<meshLambertMaterial 
       reflectivity={3}
       refractionRatio

       opacity={0.9}
       side={THREE.FrontSide}
       transparent
       shininess={20}
       specular='#ffffff'
    />

          </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Earbud_Coen_Eartip_Foam_06-09-2022"].geometry}
        material={nodes["Earbud_Coen_Eartip_Foam_06-09-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}
        >
  <meshLambertMaterial 
       reflectivity={3}
       refractionRatio

       opacity={0.9}
       side={THREE.FrontSide}
       transparent
       shininess={20}
       specular='#ffffff'
    />

</mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Earbud_Coen_Eartip_Body_06-09-2022"].geometry}
        material={nodes["Earbud_Coen_Eartip_Body_06-09-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}

        >
 <meshLambertMaterial 
       reflectivity={3}
       refractionRatio

       opacity={0.9}
       side={THREE.FrontSide}
       transparent
       shininess={20}
       specular='#ffffff'
    />

</mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Earbud_Coen_Body_06-09-2022001"].geometry}
        material={nodes["Earbud_Coen_Body_06-09-2022001"].material}
        rotation={[Math.PI / 2, 0, 0]}>
    

<meshLambertMaterial 
       reflectivity={3}
       refractionRatio

       opacity={0.9}
       side={THREE.FrontSide}
       transparent
       shininess={20}
       specular='#ffffff'
    />
       
</mesh>

   
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BREGGZ_ICON-20mm"].geometry}
        material={nodes["BREGGZ_ICON-20mm"].material}
        position={[1, 6.48, -0.11]}
        rotation={[0, 0.03, 0]}
        scale={0.01}>


        
       
          <meshLambertMaterial 
         reflectivity={2}
         refractionRatio={1}
      
         opacity={1}
         side={THREE.BackSide}
         transparent
   emissive='#f4f4f4'
         shininess={1}
         specular='#ffffff'
      
  />
 
     
          </mesh>

    

    </group>
  );
}

useGLTF.preload("/breggz_render.gltf");

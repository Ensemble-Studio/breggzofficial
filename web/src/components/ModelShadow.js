
import React, { useRef } from "react";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import { useGLTF, useNormalTexture, normRepeat,normalMap, matcap, Stage, useMatcapTexture, meshMatcapMaterial} from "@react-three/drei";
import * as THREE from "three";

import { Canvas, useFrame, useLoader, extend} from "@react-three/fiber";
   
export default function ModelShadow({ ...props }) {

  
  
  useFrame(() => {
    if(!group.current) {
      return;
    }
    group.current.rotation.x += 0.005;
    group.current.rotation.t += 0.005;
  })
  

 const [whiteGold] = useLoader(THREE.TextureLoader, ['../textures/whitegold.png'])

 const [blueBlack] = useLoader(THREE.TextureLoader, ['../textures/blueblack.png'])


 const [matteBlack] = useLoader(THREE.TextureLoader, ['../textures/matteblack.png'])


        
  const group = useRef();
  const { nodes, materials } = useGLTF("/breggz_render.glb");
  return (
    <group ref={group} {...props} dispose={null} rotation={[Math.PI / 4, 1.7, 1.1,]} position={[1, 1, 1]} >

<group position={[0,1,1]} >
      <mesh
   
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Body_03-29-2022"].geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Body_03-29-2022"].material
        }
        rotation={[Math.PI / 2, 0, 0]}>
        <meshMatcapMaterial  matcap={matteBlack}  />
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
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
        </mesh>
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
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
        </mesh>
      <mesh
      position={[0, 1,0]}
        castShadow
        receiveShadow
        geometry={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Cap_03-29-2022"].geometry
        }
        material={
          nodes["Breggz_Coen_Left_Ear_Cartridge_Cap_03-29-2022"].material
        }
        rotation={[Math.PI / 2, 0, 0]}
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
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
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
        </mesh>
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
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
        </mesh>

      <mesh

        castShadow
        receiveShadow
        geometry={nodes["Breggz_Coen_Left_Ear_BA_03-29-2022"].geometry}
        material={nodes["Breggz_Coen_Left_Ear_BA_03-29-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Breggz_Coen_Left_Ear_BA_Gasket_03-29-2022"].geometry}
        material={nodes["Breggz_Coen_Left_Ear_BA_Gasket_03-29-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
        </mesh>
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
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Breggz_Coen_Left_BA_Filter_03-29-2022"].geometry}
        material={nodes["Breggz_Coen_Left_BA_Filter_03-29-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
        </mesh>
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
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
        </mesh>
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
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Breggz_Coen_Left_Ear_Body_Magnet_03-29-2022"].geometry}
        material={nodes["Breggz_Coen_Left_Ear_Body_Magnet_03-29-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}
        >
        <meshMatcapMaterial  matcap={matteBlack}  />
        </mesh>
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
        >
        <meshMatcapMaterial  matcap={blueBlack}  />
        </mesh>


</group>

    
        <group position={[0, -1, 0]}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes["Earbud_Coen_Eartip_Foam_06-09-2022"].geometry}
        material={nodes["Earbud_Coen_Eartip_Foam_06-09-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}>
        <meshMatcapMaterial  matcap={blueBlack}  /></mesh>


      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Earbud_Coen_Eartip_Body_06-09-2022"].geometry}
        material={nodes["Earbud_Coen_Eartip_Body_06-09-2022"].material}
        rotation={[Math.PI / 2, 0, 0]}
        >
        <meshMatcapMaterial matcap={blueBlack}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Earbud_Coen_Body_06-09-2022001"].geometry}
        material={nodes["Earbud_Coen_Body_06-09-2022001"].material}
        rotation={[Math.PI / 2, 0, 0]}
      >   <meshMatcapMaterial matcap={blueBlack} />

</mesh>
</group>
<group position={[0,5,0]}>
<mesh
    
    reflectivity={9}
      contactShadow
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


       <meshMatcapMaterial  matcap={whiteGold} />
</mesh>
<mesh
  
  receiveShadow
  geometry={nodes["BREGGZ_ICON-20mm"].geometry}
  material={nodes["BREGGZ_ICON-20mm"].material}
  position={[0.997461, 6.480062, -0.109581]}
  rotation={[0, 0.034907, 0]}
  scale={0.012062}
  >


  
 
<meshMatcapMaterial matcap={whiteGold} />


  </mesh>

</group>
     
    </group>
   


  );
}


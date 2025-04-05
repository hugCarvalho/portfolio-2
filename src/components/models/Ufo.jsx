
"use client"
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import { memo, useRef } from "react";

const Ufo = memo(function Ufo(props) {
  const { nodes, materials } = useGLTF('/models/ufo-transformed.glb')
    const modelRef = useRef();

    useFrame((state) => {
      modelRef.current.position.y =
        -0.6 + Math.sin(state.clock.elapsedTime) * 0.15; // position + speed of animation
    });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, 0, 1]}
      scale={[0.009, 0.009, 0.009]}
      rotation={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.Alien_low_Alien_0.geometry}
        material={materials.Alien}
        position={[6.02, 92.249, 0]}
        rotation={[-Math.PI / 2, 0.175, 0]}
        scale={1.458}
      />
      <mesh
        geometry={nodes.Ufo_ship_low_Ship_0.geometry}
        material={materials.Ship}
        position={[-7.192, 17.318, 0]}
        rotation={[-Math.PI / 2, 0.175, 0]}
        scale={1.458}
      />
    </group>
  )
})

export default Ufo
useGLTF.preload('/models/ufo-transformed.glb')

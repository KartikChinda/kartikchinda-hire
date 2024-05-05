/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\models\k.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function K(props) {
  const { nodes, materials } = useGLTF('models/k.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={materials['Default Material']} position={[-49.5, -44, 0]} rotation={[Math.PI, -1.267, Math.PI]} />
    </group>
  )
}

useGLTF.preload('/k.glb')

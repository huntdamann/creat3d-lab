
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/wine_bottle.glb')
    return (
      <group {...props} dispose={null}>
        <group scale={[0.9, 0.9, 0.9]} position={[-1.5, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_003-material'].geometry}
            material={materials.Material_003}
            position={[0, 0, -2.382]}
            scale={0.873}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_002-material'].geometry}
            material={materials.Material_002}
            position={[0, 0, -2.408]}
            scale={0.873}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_002-material_1'].geometry}
            material={materials.Material_002}
            position={[0, 0, -2.382]}
            scale={0.873}
          />
          <lineSegments
            geometry={nodes.Object_9.geometry}
            material={materials.Cylinder_000}
            position={[0, 0, -2.382]}
            scale={0.873}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_001-material'].geometry}
            material={materials.Material_001}
            position={[0, -0.003, -2.382]}
            scale={0.873}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_005-material'].geometry}
            material={materials.Material_005}
            position={[0, 0, -2.382]}
            scale={0.873}
          />
        </group>
      </group>
    )
  }
 
export function ModelTwo(props) {
  const { nodes, materials } = useGLTF('/soda_can.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-1.5, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Label}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Metal}
        />
      </group>
    </group>
  )
}


export function ModelThree(props) {
  const { nodes, materials } = useGLTF('/power_shake_strawberry.glb')
  return (
    <group position={[-1.5, -3, 0]} rotateZ={2} scale={[0.008, 0.008, 0.008]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.strawberry_1_strawberry_0.geometry}
        material={materials.strawberry}
        position={[-18.45, 222.823, 6.552]}
        rotation={[0,4.5,0]}
      />
    </group>
  )
}

useGLTF.preload('/power_shake_strawberry.glb')


useGLTF.preload('/soda_can.glb')
useGLTF.preload('/wine_bottle.glb')
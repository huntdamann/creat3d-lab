"use client"
import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useTexture, Text, Environment, Float, OrbitControls, Center } from "@react-three/drei";
import { DoubleSide, PerspectiveCamera } from 'three';
import { Model, ModelTwo, ModelThree, ModelFour } from './Model'



function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <group>

    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
   
    </group>

  )
}
function Ground(props) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef()
    const [colorMap, displacementMap] = useTexture([
      '/textures/wood_shutter_diff_2k.jpg',
      '/textures/wood_shutter_disp_2k.png',
    ])
   
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <group>
  
      <mesh
        {...props}
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3.5, 0]}
      >
        <planeGeometry args={[10, 10, 32, 32]} />
        <meshStandardMaterial map={colorMap} displacementMap={displacementMap}   side={DoubleSide} />
      </mesh>
     
      </group>
  
    )
  }
export const Common = ({ color }) => (
  <Suspense fallback={null}>
  
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
  </Suspense>
)
export default function Scene({ selected }) {

  
  
  return (

    <>
  
    
    <Canvas className='' gl={{ antialias: false }} color='#000000' camera={{ position: [-3.17, 5.47, 5.34], fov: 50, near: 1, far: 30 }}>
         
        <color attach="background" args={["#1a1a1a"]} />

        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[-1.5, 10, 0]}  penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Center>
            {/* <Model /> */}
           
            {selected === 'wine' && <Model />}
            {selected === 'soda' && <ModelFour />}
            {selected === 'shake' && <ModelThree />}



            <Ground />
        </Center>
        {/* <CameraHelper /> */}
        <OrbitControls
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI /2}
        />
        <Environment 
        background={true}
        environmentIntensity={2}
        backgroundIntensity={0.8}
        files={`/file.jpg`}
        />
    </Canvas>

  </>
  )
}

function CameraHelper() {
    const camera = new PerspectiveCamera(60, 1, 1, 3);
    return <group position={[0, 0, 2]}>
     <cameraHelper args={[camera]} />
     </group>
}
function PrintCamera() {
  const { camera, controls } = useThree()

  useEffect(() => {
    if (!controls) return

    const handleChange = () => {
      const pos = camera.position
      const tgt = controls.target
      const distance = pos.distanceTo(tgt)

      console.log({
        cameraPosition: [pos.x.toFixed(2), pos.y.toFixed(2), pos.z.toFixed(2)],
        controlsTarget: [tgt.x.toFixed(2), tgt.y.toFixed(2), tgt.z.toFixed(2)],
        zoomDistance: distance.toFixed(2)
      })
    }

    controls.addEventListener('change', handleChange)

    // Cleanup on unmount
    return () => {
      controls.removeEventListener('change', handleChange)
    }
  }, [camera, controls])

  return null
}
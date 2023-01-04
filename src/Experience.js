import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { softShadows, BakeShadows, useHelper, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'

softShadows(
{
    frustum: 3.75,
    size: 0.005,
    near: 9.5,
    samples: 17,
    rings: 11
})

export default function Experience()
{
    const cube = useRef()
    const directionalLight = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 2)

    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta 
    })
    
    return <>
        {/* Removing Baked Shadows since PCSS is a per-frame effect */}
        {/* <BakeShadows /> */}
        
        <color
            args={['purple']}
            attach="background" />
        
        <Perf
            position="top-left" />
        
        <OrbitControls
            makeDefault />

        <directionalLight
            ref={directionalLight}
            position={[1, 2, 3]}
            intensity={1.5}
            castShadow
            // This sets the detail for the shadow
            shadow-mapSize={[1024, 1024]}
            // These settings constrain the calculation of the shadows for performance
            shadow-camera-near={1}
            shadow-camera-far={10}
            shadow-camera-top={5}
            shadow-camera-right={5}
            shadow-camera-bottom={-5}
            shadow-camera-left={-5}
            />
        
        <ambientLight
            intensity={0.5} />

        <mesh
            castShadow
            position-x={-2}>

            <sphereGeometry />

            <meshStandardMaterial
                color="orange" />
        </mesh>

        <mesh
            ref={cube}
            castShadow
            rotation-y={Math.PI * 0.25}
            position-x={2}
            scale={1.5}>

            <boxGeometry />

            <meshStandardMaterial
                color="mediumpurple" />
        </mesh>

        <mesh
            receiveShadow
            position-y={-1}
            rotation-x={- Math.PI * 0.5}
            scale={10}>

            <planeGeometry />

            <meshStandardMaterial
                color="greenyellow" />
        </mesh>

    </>
}
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useHelper, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'

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
        
        <color
            args={['purple']}
            attach="background" />
        
        <Perf
            position="top-left" />
        
        <OrbitControls
            makeDefault />

        <directionalLight
            ref={directionalLight}
            castShadow
            position={[1, 2, 3]}
            intensity={1.5} />
        
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
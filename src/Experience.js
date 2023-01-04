import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { RandomizedLight, AccumulativeShadows, useHelper, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Experience()
{
    const cube = useRef()
    const directionalLight = useRef()

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
        
        <AccumulativeShadows
            position={[0, -0.99, 0]}
            color="#316d69"
            opacity={0.8}
            // Be careful with this range.
            // Start with 200
            // 1000 causes a 1 second freeze before rendering on my MBP
            // This is because Three.js has to do 1000 renders on the first frame.
            // 'Infinity' helps us keep baking the rotation of the cube
            frames={Infinity}
            // This setting spreads the renders across frames
            temporal
            // The higher the blend, the less change you have to see the shadows
            // on fast moving objects
            blend={100}>

            <RandomizedLight
                amount={8}
                radius={1}
                ambient={0.5}
                intensity={1}
                position={[1, 2, 3]}
                bias={0.001}/>

        </AccumulativeShadows>

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
            position-y={-1}
            rotation-x={- Math.PI * 0.5}
            scale={10}>

            <planeGeometry />

            <meshStandardMaterial
                color="greenyellow" />
        </mesh>

    </>
}
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { ContactShadows, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

export default function Experience()
{
    const cube = useRef()
    const directionalLight = useRef()

    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta 
    })

    const { color, opacity, blur } = useControls('contact shadows',
    {
        color: '#1d8f75',
        opacity: { value: 0.4, min: 0, max: 1 },
        blur: { value: 2.8, min: 0, max: 10}
    })
    
    return <>
        
        <color
            args={['purple']}
            attach="background" />
        
        <Perf
            position="top-left" />
        
        <OrbitControls
            makeDefault />
        
        <ContactShadows 
            position={[0, -0.99, 0]}
            scale={10}
            resolution={512}
            far={5}
            color={color}
            opacity={opacity}
            blur={blur}
            // frames={1} // Use this if the scene is complex and we need to bake
            />

        <directionalLight
            ref={directionalLight}
            position={[1, 2, 3]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
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
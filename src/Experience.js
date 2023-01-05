import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

export default function Experience()
{
    const cube = useRef()

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
    
    const { envMapIntensity } = useControls('environment map',
    {
        envMapIntensity: { value: 3.5, min: 0, max: 12 }
    })
    
    return <>
        

        
        <Environment background>
            <color args={ ['#000000'] } attach="background" />
            <mesh position-z={-5} scale={10}>
                <planeGeometry />
                <meshBasicMaterial
                    // Choosing a really high value (10) for the R value to increase the brightness
                    color={[10, 0, 0]} /> 
            </mesh>

        </Environment>
        
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

        <mesh
            castShadow
            position-x={-2}>

            <sphereGeometry />

            <meshStandardMaterial
                color="orange"
                envMapIntensity={ envMapIntensity }/>
        </mesh>

        <mesh
            ref={cube}
            castShadow
            rotation-y={Math.PI * 0.25}
            position-x={2}
            scale={1.5}>

            <boxGeometry />

            <meshStandardMaterial
                color="mediumpurple"
                envMapIntensity={ envMapIntensity }/>
        </mesh>

        <mesh
            position-y={-1}
            rotation-x={- Math.PI * 0.5}
            scale={10}>

            <planeGeometry />

            <meshStandardMaterial
                color="greenyellow"
                envMapIntensity={ envMapIntensity }/>
        </mesh>

    </>
}
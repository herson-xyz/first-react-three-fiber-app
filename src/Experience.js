import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Stage, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Experience()
{
    const cube = useRef()

    useFrame((state, delta) =>
    {
        cube.current.rotation.y += delta 
    })
    
    return <>
          
        <Perf
            position="top-left" />
        
        <OrbitControls
            makeDefault />
        <Stage
            contactShadow=
            {{
                opacity: 0.2,
                blur: 3
            }}
            environment="sunset"
            preset="portrait"
            intensity={2}>

            <mesh
                castShadow
                position-x={-2}
                position-y={1}>

                <sphereGeometry />

                <meshStandardMaterial
                    color="orange"/>
            </mesh>

            <mesh
                ref={cube}
                castShadow
                rotation-y={Math.PI * 0.25}
                position-x={2}
                position-y={1}
                scale={1.5}>

                <boxGeometry />

                <meshStandardMaterial
                    color="mediumpurple"/>
                </mesh>
        </Stage>
    </>
}
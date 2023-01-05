import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Lightformer, Environment, ContactShadows, OrbitControls } from '@react-three/drei'
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
        color: '#4b2709',
        opacity: { value: 0.4, min: 0, max: 1 },
        blur: { value: 2.8, min: 0, max: 10}
        })
    
    const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } = useControls('environment map',
    {
        envMapIntensity: { value: 3.5, min: 0, max: 12 },
        envMapHeight: { value: 7, min: 0, max: 100 },
        envMapRadius: { value: 20, min: 10, max: 1000 },
        envMapScale: { value: 100, min: 10, max: 1000}
    })
    
    return <>
        

        
        <Environment
            preset="sunset"
            ground=
            {{
                height: envMapHeight,
                radius: envMapRadius,
                scale: envMapScale
            }}>
        </Environment>
        
        <color
            args={['purple']}
            attach="background" />
        
        <Perf
            position="top-left" />
        
        <OrbitControls
            makeDefault />
        
        <ContactShadows 
            position={[0, 0, 0]}
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
            position-x={-2}
            position-y={1}>

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
            position-y={1}
            scale={1.5}>

            <boxGeometry />

            <meshStandardMaterial
                color="mediumpurple"
                envMapIntensity={ envMapIntensity }/>
        </mesh>
    </>
}
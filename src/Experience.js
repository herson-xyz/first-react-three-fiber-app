import { TransformControls, OrbitControls } from "@react-three/drei"
import { useRef } from 'react'

export default function Experience()
{
    const cube = useRef()

    return <>
        
        {/* We makeDefault to tell R3F that these are our default controls */}
        {/* Otherwise, the camera moves when moving the Transform Controls */}
        <OrbitControls makeDefault /> 
                
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} /> {/* We add ambient light so that the darker shadows aren't unrealistically dark*/}

        <mesh position-x={ -2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        {/* Two Ways of Implementing Transform Controls */}

        {/* <TransformControls position-x={2}>
            <mesh rotation-y={Math.PI * 0.25} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </TransformControls> */}
            
        <mesh ref={cube} rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <TransformControls object={cube} mode="translate" />  

        <mesh position-y={ -1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}
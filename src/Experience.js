import { OrbitControls } from "@react-three/drei"

export default function Experience()
{
    
    return <>
        
        <OrbitControls />
                
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} /> {/* We add ambient light so that the darker shadows aren't unrealistically dark*/}

        <mesh position-x={ -2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={ -1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}
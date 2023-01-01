import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// extend({ OrbitControls: OrbitControls }) // On the left, the name of the declarative version of the OrbitControls class.
extend({ OrbitControls })

export default function Experience()
{
    const { camera, gl } = useThree()  // This gets the state at the beginning. Useful for referencing camera, scene, clock, etc
    const cubeRef = useRef()  // This "attaches" a reference to an element in the DOM. Just like the example for updating the color in first-react-app
    const groupRef = useRef() // Make a reference to the group

    useFrame((state, delta) =>
    {
        cubeRef.current.rotation.y += delta // We do this because different setups run at different framerates. Delta tells us how much time has passed since the last frame. So using delta here normalizes the speed for everyone.
        // groupRef.current.rotation.y += delta
    })
    
    return <>
        
        <orbitControls args={ [ camera, gl.domElement ] } /> { /* Note 1 */ }

        <group ref={ groupRef }> {/* associate the reference to the group element */}
            <mesh position-x={ -2 }>
                <sphereGeometry />
                <meshBasicMaterial color="orange" />
            </mesh>

            <mesh ref={cubeRef} rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
                <boxGeometry />
                <meshBasicMaterial color="mediumpurple" />
            </mesh>
        </group>

        <mesh position-y={ -1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshBasicMaterial color="greenyellow" />
        </mesh>
    </>
}
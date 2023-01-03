import { Html, PivotControls, TransformControls, OrbitControls } from "@react-three/drei"
import { useRef } from 'react'

export default function Experience()
{
    const cube = useRef()
    const sphere = useRef()
    
    return <>

        <OrbitControls makeDefault /> 
                
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} /> 

        {/* An alternative to TransformControls that is user-friendly */}
        {/* PivotControls is not a group in the way that TransformControls is */}
        <PivotControls
            anchor={[0, 0, 0]}
            depthTest={false}
            lineWidth={4}
            axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
            scale={100}
            fixed={true}>
            <mesh ref={ sphere } position-x={ -2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html
                    position={[1, 1, 0]}
                    wrapperClass="label"
                    center // this uses the element center as the point of origin
                    distanceFactor={8} // this helps in keeping perspective when zooming out
                    occlude={[sphere, cube]} // we use the references to the sphere and cube and instruct the HTML component to hide if it's behind either
                >
                    That's a sphere 
                </Html>
            </mesh>
        </PivotControls>

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
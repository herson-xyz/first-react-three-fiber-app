import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import Model from './Model.js'
import Placeholder from './Placeholder.js'
import Hamburguer from './Hamburger.js'

export default function Experience()
{
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight
            castShadow
            position={[1, 2, 3]}
            intensity={1.5}
            //We add shadow bias to fix shadow acne
            shadow-normalBias={0.04} />
        <ambientLight intensity={ 0.5 } />

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Suspense
            fallback={ <Placeholder position-y={0.5} scale={[2, 3, 2]} /> }>
            <Hamburguer scale={0.35} />
        </Suspense>
    </>
}
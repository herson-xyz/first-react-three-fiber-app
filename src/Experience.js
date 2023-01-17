import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useEffect } from 'react'

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const material = new THREE.MeshMatcapMaterial()

export default function Experience()
{   

    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256) 

    useEffect(() =>
    { 
        matcapTexture.encoding = THREE.sRGBEncoding
        material.needsUpdate = true
        // When using materials created in native THREE, we lose the auto encoding that happens
        // when we use materials created in react-three. So we set the encoding to sRGB with the
        // to avoid the material being too bright
        material.matcap = matcapTexture
        material.needsUpdate = true
        // When the material is created, it is being created without the matcap texture
        // When you make matcap changes, you need to tell Three.js.
        // Three.js will update the actual shader, and Three.js tries to do this as least as possible
    }, [])

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <Center>
            <Text3D
                material={material}    
                font="./fonts/helvetiker_regular.typeface.json"
                size={0.75}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}>
                HELLO R3F
            </Text3D>
        </Center>

        {[...Array(100)].map((value, index) =>
            <mesh
                key={index}
                geometry={torusGeometry}
                material={material}
                position={[
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                ]}
                scale={0.2 + Math.random() * 0.2}
                rotation={[
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    0
                ]} />
        )}

    </>
}
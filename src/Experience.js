import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Experience()
{   
    const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256) 

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <Center>
            <Text3D 
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
                <meshMatcapMaterial matcap={ matcapTexture }/>
            </Text3D>
        </Center>

        {/* This is the workaround to looping in JSX */}
        {/* Array(100) gives us empty array of length 100 */}
        {/* Wrapping that in a second array and using the spread operator, */}
        {/* gives us an array of 100 'undefined' */}

        {[...Array(100)].map((value, index) =>
            <mesh
                key={index} // When using this looping workaround, we need
                            // to provide a key so that React knows how to
                            // access each element created and is able to 
                            // optimize
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
                ]}>
                <torusGeometry args={[1, 0.6, 16, 32]} />
                <meshMatcapMaterial matcap={ matcapTexture } />
            </mesh>
        )}

    </>
}
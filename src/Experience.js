import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Experience()
{
    // What is MatCap?
    // MatCap (Material Capture, also known as LitSphere) are complete materials,
    // including lighting and reflections, so you can add it to an object and not
    // have any need for, well, lighting and reflections.
    // The ID for this example comes from: https://github.com/nidorx/matcaps/blob/master/PAGE-17.md#7b5254_e9dcc7_b19986_c8ac91
    
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
    </>
}
import { useMemo } from 'react'
import * as THREE from 'three' // We did this so we could use THREE.Doubleside

export default function CustomObject()
{
    const verticesCount = 10 * 3 

    const positions = useMemo(() =>
    {
        // We include the calculation of the object's position here
        // in the case that the CustomObject needs to be re-rendered.
        // useMemo helps us save the vertex information in "cache"
        const positions = new Float32Array(verticesCount * 3) 

        for (let i = 0; i < verticesCount * 3; i++)
            positions[i] = (Math.random() - 0.5) * 3
        
        return positions

    }, [])
    
    return <mesh>
        <bufferGeometry>
            <bufferAttribute 
                attach="attributes-position"
                count={verticesCount}
                itemSize={3}
                array={positions}
            />
        </bufferGeometry>
        <meshBasicMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
}
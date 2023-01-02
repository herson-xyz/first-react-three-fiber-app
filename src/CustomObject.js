import * as THREE from 'three' // We did this so we could use THREE.Doubleside

export default function CustomObject()
{
    const verticesCount = 10 * 3 // 10 triangles with 3 vertices each
    const positions = new Float32Array(verticesCount * 3) // Each vertex needs three values: x, y, z

    for (let i = 0; i < verticesCount * 3; i++)
        positions[i] = (Math.random() - 0.5) * 3

    return <mesh>
        <bufferGeometry>
            <bufferAttribute 
                attach="attributes-position" // This is an abstraction
                count={verticesCount}
                itemSize={3}
                array={positions}
            />
        </bufferGeometry>
        <meshBasicMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
}
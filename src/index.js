import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings =
{
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ 3, 2, 6 ]
}

root.render(
    <Canvas
        // These are the default settings in R3F. Adding them here to make
        // them more visible, but these can be removed, unless changed.
        dpr= { [ 1, 2] }
        gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding
        }}
        camera={ cameraSettings }
    >
        <Experience />
    </Canvas>
)
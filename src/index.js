import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings =
{
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ 3, 2, 6 ]
}

root.render(
    <StrictMode>
        <Canvas camera={ cameraSettings }>
            <Experience />
        </Canvas>
    </StrictMode>
)
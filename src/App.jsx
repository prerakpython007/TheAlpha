import { useState, Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Robo from './components/Robo'

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
        <color attach="background" args={['#101010']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Suspense fallback={null}>
          <Robo />
        </Suspense>
        <Environment preset="city" background={false} />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  )
}

export default App

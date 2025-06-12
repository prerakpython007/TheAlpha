import { useState, Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Robo from './components/Robo'

function Loader() {
  return <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>Loading...</div>
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#101010' }}>
      <Canvas
        camera={{ position: [5, 5, 5], fov: 45 }}
        shadows
        gl={{ antialias: true, preserveDrawingBuffer: true }}
      >
        <color attach="background" args={['#101010']} />
        <fog attach="fog" args={['#101010', 10, 20]} />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={2} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <Suspense fallback={null}>
          <Robo scale={2} position={[0, -1, 0]} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>
      <Loader />
    </div>
  )
}

export default App

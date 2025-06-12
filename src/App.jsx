import { useState, Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Robo from './components/Robo'

function Loader() {
  return (
    <div style={{ 
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)',
      color: 'white'
    }}>
      Loading...
    </div>
  )
}

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
        <color attach="background" args={['#101010']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Suspense fallback={null}>
          <ErrorBoundary>
            <Robo />
          </ErrorBoundary>
        </Suspense>
        <Environment preset="city" background={false} />
        <OrbitControls makeDefault />
      </Canvas>
      <Loader />
    </>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Model Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return null
    }
    return this.props.children
  }
}

export default App

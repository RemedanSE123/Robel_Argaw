"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function CosmicParticles({ count = 3000 }) {
  const ref = useRef<THREE.Points>(null!)

  // Create cosmic dust particles
  const particles = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    particles[i3] = (Math.random() - 0.5) * 40
    particles[i3 + 1] = (Math.random() - 0.5) * 40
    particles[i3 + 2] = (Math.random() - 0.5) * 40

    // Purple to blue color gradient
    const hue = 0.6 + Math.random() * 0.2 // Purple to blue range
    const color = new THREE.Color().setHSL(hue, 0.7, 0.6)
    colors[i3] = color.r
    colors[i3 + 1] = color.g
    colors[i3 + 2] = color.b
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 25
      ref.current.rotation.y += delta / 35
      ref.current.rotation.z += delta / 45
    }

    // Floating animation
    if (ref.current && ref.current.geometry.attributes.position) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime * 0.5 + i * 0.01) * 0.01
        positions[i + 1] += Math.cos(state.clock.elapsedTime * 0.3 + i * 0.01) * 0.01
        positions[i + 2] += Math.sin(state.clock.elapsedTime * 0.7 + i * 0.01) * 0.01
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
      <bufferAttribute attach="geometry-attributes-color" args={[colors, 3]} />
    </Points>
  )
}

function NebulaEffect() {
  const ref = useRef<THREE.Points>(null!)

  const particles = new Float32Array(500 * 3)
  for (let i = 0; i < 500; i++) {
    const i3 = i * 3
    particles[i3] = (Math.random() - 0.5) * 60
    particles[i3 + 1] = (Math.random() - 0.5) * 60
    particles[i3 + 2] = (Math.random() - 0.5) * 60
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 40
      ref.current.rotation.y -= delta / 50
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.3}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  )
}

export default function CosmicDust() {
  return (
    <div className="absolute inset-0 -z-10 bg-white">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-violet-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 rounded-full blur-2xl"></div>
      <div className="fixed inset-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.1} />
          <CosmicParticles />
          <NebulaEffect />
        </Canvas>
      </div>
    </div>
  )
}

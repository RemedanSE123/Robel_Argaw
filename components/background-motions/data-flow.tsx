"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Line } from "@react-three/drei"
import * as THREE from "three"

function FlowingData({ count = 200 }) {
  const ref = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.Group>(null!)

  // Create flowing data particles
  const particles = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    particles[i3] = (Math.random() - 0.5) * 20
    particles[i3 + 1] = (Math.random() - 0.5) * 20
    particles[i3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 10
    }

    // Animate flowing data
    if (ref.current && ref.current.geometry.attributes.position) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime + i) * 0.02
        positions[i + 1] += Math.cos(state.clock.elapsedTime + i) * 0.02
        positions[i + 2] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.02
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#10b981"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

function NetworkLines() {
  const ref = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 20
      ref.current.rotation.z += delta / 30
    }
  })

  const points = []
  for (let i = 0; i < 50; i++) {
    points.push(new THREE.Vector3((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15))
  }

  return (
    <group ref={ref}>
      {points.map((point, index) => (
        <Line
          key={index}
          points={[new THREE.Vector3(0, 0, 0), point]}
          color="#06b6d4"
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}
    </group>
  )
}

export default function DataFlow() {
  return (
    <div className="absolute inset-0 -z-10 bg-white">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-transparent rounded-full blur-2xl"></div>
      <div className="fixed inset-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.2} />
          <FlowingData />
          <NetworkLines />
        </Canvas>
      </div>
    </div>
  )
}

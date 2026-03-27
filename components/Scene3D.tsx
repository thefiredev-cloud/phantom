'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function AgentGrid() {
  const meshesRef = useRef<THREE.InstancedMesh>(null)
  const timeRef = useRef(0)
  const GRID = 8
  const SPACING = 0.55

  const { dummy, positions } = useMemo(() => {
    const dummy = new THREE.Object3D()
    const positions: [number, number, number][] = []
    const half = (GRID - 1) * SPACING * 0.5
    for (let x = 0; x < GRID; x++) {
      for (let z = 0; z < GRID; z++) {
        positions.push([x * SPACING - half, 0, z * SPACING - half])
      }
    }
    return { dummy, positions }
  }, [])

  useFrame((_, delta) => {
    timeRef.current += delta
    if (!meshesRef.current) return
    positions.forEach(([x, , z], i) => {
      const dist = Math.sqrt(x * x + z * z)
      const wave = Math.sin(timeRef.current * 2 - dist * 2.5) * 0.15 + 1
      dummy.position.set(x, (wave - 1) * 0.3, z)
      dummy.scale.setScalar(wave * 0.18)
      dummy.updateMatrix()
      meshesRef.current!.setMatrixAt(i, dummy.matrix)

      const bright = (Math.sin(timeRef.current * 2 - dist * 2.5) + 1) * 0.5
      const color = new THREE.Color()
      color.setHSL(0.77, 0.8, 0.3 + bright * 0.5)
      meshesRef.current!.setColorAt(i, color)
    })
    meshesRef.current.instanceMatrix.needsUpdate = true
    if (meshesRef.current.instanceColor) meshesRef.current.instanceColor.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshesRef} args={[undefined, undefined, GRID * GRID]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial emissive="#7c3aed" emissiveIntensity={0.8} />
    </instancedMesh>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 4, 6], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 5, 0]} color="#7c3aed" intensity={3} />
        <pointLight position={[3, 1, 3]} color="#a855f7" intensity={1} />
        <AgentGrid />
        <OrbitControls autoRotate autoRotateSpeed={0.8} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}

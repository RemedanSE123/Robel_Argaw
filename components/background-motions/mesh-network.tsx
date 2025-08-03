"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  targetX: number
  targetY: number
  size: number
}

export default function MeshNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const nodes: Node[] = []
    const gridSize = 80
    const cols = Math.ceil(canvas.width / gridSize)
    const rows = Math.ceil(canvas.height / gridSize)

    // Create grid of nodes
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const x = i * gridSize
        const y = j * gridSize
        nodes.push({
          x,
          y,
          targetX: x + (Math.random() - 0.5) * 40,
          targetY: y + (Math.random() - 0.5) * 40,
          size: Math.random() * 3 + 2,
        })
      }
    }

    let time = 0

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      nodes.forEach((node, index) => {
        // Animate node positions
        node.targetX = (index % (cols + 1)) * gridSize + Math.sin(time + index * 0.1) * 30
        node.targetY = Math.floor(index / (cols + 1)) * gridSize + Math.cos(time + index * 0.1) * 30

        node.x += (node.targetX - node.x) * 0.05
        node.y += (node.targetY - node.y) * 0.05

        // Draw connections
        nodes.forEach((otherNode, otherIndex) => {
          if (otherIndex <= index) return

          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < gridSize * 1.5) {
            const opacity = (1 - distance / (gridSize * 1.5)) * 0.3
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 2)
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
        gradient.addColorStop(0.5, "rgba(147, 197, 253, 0.6)")
        gradient.addColorStop(1, "rgba(191, 219, 254, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 bg-white">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-100/40 to-transparent rounded-full blur-3xl"></div>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

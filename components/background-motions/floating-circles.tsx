"use client"

import { useEffect, useRef } from "react"

export default function FloatingCircles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const shapes = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 15 + 5,
      dx: Math.random() * 1.5 - 0.75,
      dy: Math.random() * 1.5 - 0.75,
      opacity: Math.random() * 0.4 + 0.1,
      hue: Math.random() * 60 + 200, // Blue range
    }))

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach((s) => {
        s.x += s.dx
        s.y += s.dy

        if (s.x < -s.size || s.x > canvas.width + s.size) s.dx *= -1
        if (s.y < -s.size || s.y > canvas.height + s.size) s.dy *= -1

        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size)
        gradient.addColorStop(0, `hsla(${s.hue}, 70%, 60%, ${s.opacity})`)
        gradient.addColorStop(0.7, `hsla(${s.hue}, 70%, 80%, ${s.opacity * 0.5})`)
        gradient.addColorStop(1, `hsla(${s.hue}, 70%, 90%, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-200/30 to-transparent rounded-full blur-3xl"></div>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

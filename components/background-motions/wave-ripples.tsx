"use client"

import { useEffect, useRef } from "react"

interface Ripple {
  x: number
  y: number
  radius: number
  maxRadius: number
  opacity: number
  speed: number
}

export default function WaveRipples() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ripples: Ripple[] = []
    let lastRippleTime = 0

    function createRipple() {
      ripples.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 0,
        maxRadius: Math.random() * 200 + 100,
        opacity: 0.6,
        speed: Math.random() * 2 + 1,
      })
    }

    function animate(currentTime: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create new ripples periodically
      if (currentTime - lastRippleTime > 1500) {
        createRipple()
        lastRippleTime = currentTime
      }

      ripples.forEach((ripple, index) => {
        ripple.radius += ripple.speed
        ripple.opacity = Math.max(0, 0.6 * (1 - ripple.radius / ripple.maxRadius))

        if (ripple.radius >= ripple.maxRadius) {
          ripples.splice(index, 1)
          return
        }

        // Draw multiple concentric circles
        for (let i = 0; i < 3; i++) {
          const currentRadius = ripple.radius - i * 20
          if (currentRadius > 0) {
            ctx.beginPath()
            ctx.arc(ripple.x, ripple.y, currentRadius, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(59, 130, 246, ${ripple.opacity * (1 - i * 0.3)})`
            ctx.lineWidth = 3 - i
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    // Create initial ripples
    for (let i = 0; i < 3; i++) {
      setTimeout(createRipple, i * 500)
    }

    animate(0)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 bg-white">
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-indigo-100/30 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-gradient-to-bl from-cyan-100/25 to-transparent rounded-full blur-xl"></div>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

"use client"

import { useState } from "react"
import { Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface MotionSelectorProps {
  currentMotion: string
  onMotionChange: (motion: string) => void
}

const motionOptions = [
  { id: "floating-circles", name: "Floating Circles", preview: "●●●" },
  { id: "particle-network", name: "Particle Network", preview: "⬢⬢⬢" },
  { id: "wave-ripples", name: "Wave Ripples", preview: "◉◉◉" },
  { id: "mesh-network", name: "Mesh Network", preview: "⧨⧨⧨" },
  { id: "starfield-animation", name: "Starfield Animation", preview: "✦✦✦" },
  { id: "data-flow", name: "Data Flow", preview: "↑↑↑" },
  { id: "cosmic-dust", name: "Cosmic Dust", preview: "∴∴∴" },
]

export default function MotionSelector({ currentMotion, onMotionChange }: MotionSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-6 right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
          size="sm"
        >
          <Settings className="w-5 h-5 text-gray-700 animate-spin-slow" />
        </Button>
      ) : (
        <Card className="bg-white/90 backdrop-blur-md border-0 shadow-2xl animate-fade-in">
          <CardContent className="p-4 w-64">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Background Motion</h3>
              <Button onClick={() => setIsOpen(false)} variant="ghost" size="sm" className="w-6 h-6 p-0">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {motionOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    onMotionChange(option.id)
                    setIsOpen(false)
                  }}
                  className={`w-full p-3 rounded-lg text-left transition-all duration-200 flex items-center justify-between ${
                    currentMotion === option.id
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span className="font-medium">{option.name}</span>
                  <span className="text-sm opacity-70">{option.preview}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

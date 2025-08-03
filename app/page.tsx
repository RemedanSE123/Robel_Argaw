"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Send, Linkedin, Mail, Phone, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MotionSelector from "@/components/motion-selector"
import FloatingCircles from "@/components/background-motions/floating-circles"
import ParticleNetwork from "@/components/background-motions/particle-network"
import WaveRipples from "@/components/background-motions/wave-ripples"
import MeshNetwork from "@/components/background-motions/mesh-network"
import StarfieldAnimation from "@/components/background-motions/starfield-animation"
import DataFlow from "@/components/background-motions/data-flow"
import CosmicDust from "@/components/background-motions/cosmic-dust"

const backgroundComponents = {
  "floating-circles": FloatingCircles,
  "particle-network": ParticleNetwork,
  "wave-ripples": WaveRipples,
  "mesh-network": MeshNetwork,
  "starfield-animation": StarfieldAnimation,
  "data-flow": DataFlow,
  "cosmic-dust": CosmicDust,
}

export default function HomePage() {
  const [currentMotion, setCurrentMotion] = useState("floating-circles")
  const BackgroundComponent = backgroundComponents[currentMotion as keyof typeof backgroundComponents]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <BackgroundComponent />

      {/* Motion Selector */}
      <MotionSelector currentMotion={currentMotion} onMotionChange={setCurrentMotion} />

      {/* Enhanced Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px]"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Enhanced Profile Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="relative mb-8">
              <div className="w-56 h-56 mx-auto relative">
                {/* Multiple rotating rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75"></div>
                <div
                  className="absolute inset-1 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-50"
                  style={{ animationDirection: "reverse", animationDuration: "12s" }}
                ></div>
                <div className="relative w-40 h-40 sm:w-56 sm:h-58 rounded-full overflow-hidden">
  <Image
    src="/remdan.jpg"
    alt="Robel Aragew"
    fill
    className="object-cover"
  />
</div>

              </div>
              {/* Enhanced glow effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -inset-12 bg-gradient-to-r from-pink-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative">
              <h1 className="text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4 animate-slide-up">
                Robel Argaw
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
                <p className="text-2xl text-gray-700 font-medium animate-slide-up delay-200">
                  Multi-Disciplinary Professional & Creative Innovator
                </p>
                <Zap className="w-6 h-6 text-blue-500 animate-pulse delay-500" />
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up delay-300">
                Transforming ideas into reality through engineering excellence and creative innovation
              </p>
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl w-full mb-20">
            {/* Mechanical Engineering */}
            <Link href="/mechanical-engineering" className="group">
              <Card className="h-full bg-white/90 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:bg-white/95 relative overflow-hidden">
                {/* Card background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <CardContent className="p-10 text-center relative">
                  <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-500">
                    Mechanical Engineering
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    Innovative design solutions, precision manufacturing, and cutting-edge mechanical systems. Expertise
                    in CAD modeling, thermal analysis, and product development with a focus on sustainable engineering
                    practices that shape the future.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      CAD Design
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      3D Modeling
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      Manufacturing
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white group-hover:border-blue-500 transition-all duration-500 px-8 py-3 text-lg font-semibold"
                  >
                    Explore Projects →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Video Editor & Graphics Designer */}
            <Link href="/creative-services" className="group">
              <Card className="h-full bg-white/90 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:bg-white/95 relative overflow-hidden">
                {/* Card background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <CardContent className="p-10 text-center relative">
                  <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-500">
                    Video Editor & Graphics Designer
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    Compelling visual storytelling through dynamic video editing and stunning graphic design.
                    Specializing in brand identity, motion graphics, and cinematic video production that captivates
                    audiences and drives meaningful engagement across all platforms.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      Video Editing
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      Motion Graphics
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      Brand Design
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-white border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white group-hover:border-purple-500 transition-all duration-500 px-8 py-3 text-lg font-medium"
                  >
                    View Portfolio →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Enhanced Contact Section */}
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect & Create</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's collaborate and build something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-600 mt-3 group-hover:text-green-600 transition-colors">
                  WhatsApp
                </p>
              </a>

              <a href="https://t.me/your-username" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-600 mt-3 group-hover:text-blue-600 transition-colors">
                  Telegram
                </p>
              </a>

              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-800 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <Linkedin className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-600 mt-3 group-hover:text-blue-700 transition-colors">
                  LinkedIn
                </p>
              </a>

              <a href="mailto:your-email@example.com" className="group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-600 mt-3 group-hover:text-red-600 transition-colors">
                  Email
                </p>
              </a>

              <a href="tel:+your-phone-number" className="group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-600 mt-3 group-hover:text-gray-700 transition-colors">
                  Phone
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

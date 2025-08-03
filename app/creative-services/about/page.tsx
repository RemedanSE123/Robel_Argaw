"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NavigationSidebar from "@/components/navigation-sidebar"
import DataFlow from "@/components/background-motions/data-flow"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <DataFlow />
      <NavigationSidebar basePath="/creative-services" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex items-center mb-8 animate-fade-in">
          <Link href="/creative-services" className="mr-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/80 backdrop-blur-sm border border-gray-300 hover:bg-white/90"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600">Creative Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                I am a passionate creative professional with over 6 years of experience in visual storytelling, video
                editing, and graphic design. My journey began with a love for visual arts and has evolved into a career
                dedicated to bringing brands and stories to life through compelling visual content.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                My expertise spans across multiple creative disciplines including brand identity development, motion
                graphics, video editing, and digital marketing materials. I believe in the power of visual communication
                to connect with audiences on an emotional level and drive meaningful engagement.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                What sets me apart is my ability to understand both the technical and artistic aspects of creative work.
                I combine cutting-edge tools with timeless design principles to create content that not only looks
                stunning but also serves its intended purpose effectively.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether it's crafting a brand identity from scratch, editing a promotional video, or designing marketing
                materials, I approach each project with enthusiasm, creativity, and attention to detail that ensures
                exceptional results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

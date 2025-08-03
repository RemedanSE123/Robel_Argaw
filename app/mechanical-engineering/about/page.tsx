"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NavigationSidebar from "@/components/navigation-sidebar"
import StarfieldAnimation from "@/components/background-motions/starfield-animation"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarfieldAnimation />
      <NavigationSidebar basePath="/mechanical-engineering" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex items-center mb-8 animate-fade-in">
          <Link href="/mechanical-engineering" className="mr-4">
            <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Professional Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                I am a passionate mechanical engineer with over 5 years of experience in innovative design solutions,
                precision manufacturing, and cutting-edge mechanical systems. My journey in engineering began with a
                fascination for how things work and a desire to create solutions that make a difference.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Throughout my career, I have specialized in CAD modeling, thermal analysis, and sustainable product
                development. I believe in combining traditional engineering principles with modern technology to create
                efficient, sustainable, and cost-effective solutions for complex mechanical challenges.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                My approach to engineering is holistic - I consider not just the technical requirements, but also the
                environmental impact, user experience, and long-term sustainability of every project I work on.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

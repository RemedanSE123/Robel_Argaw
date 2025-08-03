"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import NavigationSidebar from "@/components/navigation-sidebar"
import StarfieldAnimation from "@/components/background-motions/starfield-animation"

export default function ExperiencePage() {
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
            Experience
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up">
            <CardContent className="p-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior Mechanical Engineer</h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">Tech Solutions Inc. • 2022 - Present</p>
                <ul className="text-gray-700 space-y-2 text-lg">
                  <li>• Leading design and development of advanced mechanical systems</li>
                  <li>• Managing cross-functional teams of 8+ engineers</li>
                  <li>• Implementing sustainable engineering practices</li>
                  <li>• Reduced production costs by 25% through design optimization</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-200">
            <CardContent className="p-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mechanical Design Engineer</h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">Innovation Corp • 2020 - 2022</p>
                <ul className="text-gray-700 space-y-2 text-lg">
                  <li>• Developed CAD models for complex mechanical assemblies</li>
                  <li>• Conducted thermal analysis and optimization studies</li>
                  <li>• Collaborated with manufacturing teams for design validation</li>
                  <li>• Improved product efficiency by 30% through innovative design</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

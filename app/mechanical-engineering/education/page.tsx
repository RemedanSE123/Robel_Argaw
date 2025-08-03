"use client"

import Link from "next/link"
import { ArrowLeft, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import NavigationSidebar from "@/components/navigation-sidebar"
import StarfieldAnimation from "@/components/background-motions/starfield-animation"

export default function EducationPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarfieldAnimation />
      <NavigationSidebar basePath="/mechanical-engineering" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex items-center mb-8 animate-fade-in">
          <Link href="/mechanical-engineering" className="mr-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/80 backdrop-blur-sm border border-gray-300 hover:bg-white/90"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Education
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Academic Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Master of Science in Mechanical Engineering</h3>
                <p className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Stanford University • 2018 - 2020
                </p>
                <p className="text-gray-700 mb-4">
                  Specialized in Advanced Manufacturing and Design Optimization. Thesis: "Sustainable Design
                  Methodologies for Automotive Components"
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>GPA: 3.9/4.0</Badge>
                  <Badge>Dean's List</Badge>
                  <Badge>Research Assistant</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-200">
            <CardContent className="p-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Science in Mechanical Engineering</h3>
                <p className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  MIT • 2014 - 2018
                </p>
                <p className="text-gray-700 mb-4">
                  Focus on Thermodynamics and Fluid Mechanics. Senior Project: "Energy-Efficient HVAC System Design"
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Magna Cum Laude</Badge>
                  <Badge>Engineering Honor Society</Badge>
                  <Badge>Capstone Award</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-400">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Certifications & Training</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Professional Engineer (PE)</h4>
                  <p className="text-sm text-gray-600">State Engineering Board • 2021</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">SolidWorks Expert Certification</h4>
                  <p className="text-sm text-gray-600">Dassault Systèmes • 2020</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Six Sigma Green Belt</h4>
                  <p className="text-sm text-gray-600">ASQ • 2019</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Project Management Professional</h4>
                  <p className="text-sm text-gray-600">PMI • 2022</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

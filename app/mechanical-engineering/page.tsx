"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import NavigationSidebar from "@/components/navigation-sidebar"
import StarfieldAnimation from "@/components/background-motions/starfield-animation"

export default function MechanicalEngineeringPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <StarfieldAnimation />

      {/* Navigation Sidebar */}
      <NavigationSidebar basePath="/mechanical-engineering" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center mb-8 animate-fade-in">
          <Link href="/" className="mr-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/80 backdrop-blur-sm border border-gray-300 hover:bg-white/90"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Mechanical Engineering
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Me */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Passionate mechanical engineer with expertise in innovative design solutions, precision manufacturing,
                  and cutting-edge mechanical systems. I specialize in CAD modeling, thermal analysis, and sustainable
                  product development.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My approach combines traditional engineering principles with modern technology to create efficient,
                  sustainable, and cost-effective solutions for complex mechanical challenges.
                </p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">Senior Mechanical Engineer</h3>
                  <p className="text-blue-600 font-medium">Tech Solutions Inc. • 2022 - Present</p>
                  <p className="text-gray-600 mt-2">
                    Leading design and development of advanced mechanical systems, managing cross-functional teams, and
                    implementing sustainable engineering practices.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">Mechanical Design Engineer</h3>
                  <p className="text-blue-600 font-medium">Innovation Corp • 2020 - 2022</p>
                  <p className="text-gray-600 mt-2">
                    Developed CAD models, conducted thermal analysis, and optimized product designs for manufacturing
                    efficiency and cost reduction.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-400">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Featured Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Project 1"
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold mb-2">Automated Manufacturing System</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Designed and implemented an automated assembly line system that increased production efficiency by
                      40%.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">CAD Design</Badge>
                      <Badge variant="secondary">Automation</Badge>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Project 2"
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold mb-2">Thermal Management Solution</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Developed innovative cooling system for high-performance electronics, reducing operating
                      temperature by 25%.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Thermal Analysis</Badge>
                      <Badge variant="secondary">CFD</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Certificates */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-600">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Certificates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Professional Engineer (PE)</p>
                    <p className="text-sm text-gray-600">State Engineering Board</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SolidWorks Certification</p>
                    <p className="text-sm text-gray-600">Dassault Systèmes</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Six Sigma Green Belt</p>
                    <p className="text-sm text-gray-600">ASQ</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-800">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>SolidWorks</Badge>
                  <Badge>AutoCAD</Badge>
                  <Badge>ANSYS</Badge>
                  <Badge>MATLAB</Badge>
                  <Badge>Python</Badge>
                  <Badge>FEA</Badge>
                  <Badge>CFD</Badge>
                  <Badge>GD&T</Badge>
                  <Badge>Lean Manufacturing</Badge>
                  <Badge>Project Management</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-1000">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Contact Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

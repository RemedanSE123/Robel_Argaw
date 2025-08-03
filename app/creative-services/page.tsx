"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import NavigationSidebar from "@/components/navigation-sidebar"
import DataFlow from "@/components/background-motions/data-flow"

export default function CreativeServicesPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <DataFlow />

      {/* Navigation Sidebar */}
      <NavigationSidebar basePath="/creative-services" />

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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Video Editor & Graphics Designer
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Me */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Creative professional specializing in compelling visual storytelling through dynamic video editing and
                  stunning graphic design. I bring brands to life through innovative design solutions and cinematic
                  video production.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My expertise spans brand identity development, motion graphics, video editing, and digital marketing
                  materials that captivate audiences and drive meaningful engagement.
                </p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-200">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">Senior Creative Designer</h3>
                  <p className="text-purple-600 font-medium">Digital Media Agency • 2022 - Present</p>
                  <p className="text-gray-600 mt-2">
                    Leading creative campaigns for major brands, managing video production from concept to delivery, and
                    developing comprehensive brand identity systems.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">Video Editor & Motion Graphics Artist</h3>
                  <p className="text-purple-600 font-medium">Creative Studios • 2020 - 2022</p>
                  <p className="text-gray-600 mt-2">
                    Produced high-quality video content, created motion graphics for advertising campaigns, and
                    collaborated with clients to bring their creative visions to life.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-400">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Featured Work</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Video Project"
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">Brand Campaign Video</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Complete video production for tech startup launch, including motion graphics and sound design.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Video Editing</Badge>
                      <Badge variant="secondary">Motion Graphics</Badge>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Design Project"
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold mb-2">Brand Identity Design</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Complete brand identity system including logo, color palette, and marketing materials.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Brand Design</Badge>
                      <Badge variant="secondary">Logo Design</Badge>
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
                <CardTitle className="text-xl text-purple-600">Certificates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Adobe Certified Expert</p>
                    <p className="text-sm text-gray-600">Adobe Systems</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Motion Graphics Certificate</p>
                    <p className="text-sm text-gray-600">School of Motion</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Digital Marketing Design</p>
                    <p className="text-sm text-gray-600">Google Creative</p>
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
                <CardTitle className="text-xl text-purple-600">Creative Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Adobe Premiere Pro</Badge>
                  <Badge>After Effects</Badge>
                  <Badge>Photoshop</Badge>
                  <Badge>Illustrator</Badge>
                  <Badge>DaVinci Resolve</Badge>
                  <Badge>Cinema 4D</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Brand Design</Badge>
                  <Badge>Motion Graphics</Badge>
                  <Badge>Color Grading</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-1000">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Contact Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  className="bg-white border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-500 px-8 py-3 text-lg font-semibold"
                >
                  View Portfolio →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

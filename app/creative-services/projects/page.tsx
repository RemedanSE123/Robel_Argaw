"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import NavigationSidebar from "@/components/navigation-sidebar"
import DataFlow from "@/components/background-motions/data-flow"

export default function ProjectsPage() {
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
            Projects
          </h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Brand+Campaign+Video"
                    alt="Brand Campaign Video"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl text-purple-600 mb-3">Brand Campaign Video</CardTitle>
                <p className="text-gray-600 mb-4">
                  Complete video production for tech startup launch, including motion graphics and sound design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Video Editing</Badge>
                  <Badge>Motion Graphics</Badge>
                  <Badge>Sound Design</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-200 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Brand+Identity+Design"
                  alt="Brand Identity Design"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl text-purple-600 mb-3">Brand Identity Design</CardTitle>
                <p className="text-gray-600 mb-4">
                  Complete brand identity system including logo, color palette, and marketing materials.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Brand Design</Badge>
                  <Badge>Logo Design</Badge>
                  <Badge>Print Design</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-400 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Social+Media+Campaign"
                  alt="Social Media Campaign"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl text-purple-600 mb-3">Social Media Campaign</CardTitle>
                <p className="text-gray-600 mb-4">
                  Comprehensive social media visual campaign that increased engagement by 300%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Social Media</Badge>
                  <Badge>Digital Marketing</Badge>
                  <Badge>Content Creation</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-600 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Product+Demo+Video"
                    alt="Product Demo Video"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl text-purple-600 mb-3">Product Demo Video</CardTitle>
                <p className="text-gray-600 mb-4">
                  Engaging product demonstration video with 3D animations and professional voiceover.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>3D Animation</Badge>
                  <Badge>Product Video</Badge>
                  <Badge>Voiceover</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-800 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Website+Design"
                  alt="Website Design"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl text-purple-600 mb-3">Website Design</CardTitle>
                <p className="text-gray-600 mb-4">
                  Modern, responsive website design with interactive elements and smooth animations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Web Design</Badge>
                  <Badge>UI/UX</Badge>
                  <Badge>Responsive</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-1000 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Event+Graphics"
                  alt="Event Graphics"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl text-purple-600 mb-3">Event Graphics Package</CardTitle>
                <p className="text-gray-600 mb-4">
                  Complete visual identity for corporate event including signage, presentations, and digital assets.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Event Design</Badge>
                  <Badge>Signage</Badge>
                  <Badge>Presentations</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

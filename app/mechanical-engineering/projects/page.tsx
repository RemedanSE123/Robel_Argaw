"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import NavigationSidebar from "@/components/navigation-sidebar"
import StarfieldAnimation from "@/components/background-motions/starfield-animation"

export default function ProjectsPage() {
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
            Projects
          </h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Automated+Manufacturing"
                  alt="Automated Manufacturing System"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl text-blue-600 mb-3">Automated Manufacturing System</CardTitle>
                <p className="text-gray-600 mb-4">
                  Designed and implemented an automated assembly line system that increased production efficiency by
                  40%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>CAD Design</Badge>
                  <Badge>Automation</Badge>
                  <Badge>PLC Programming</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-200 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Thermal+Management"
                  alt="Thermal Management Solution"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl text-blue-600 mb-3">Thermal Management Solution</CardTitle>
                <p className="text-gray-600 mb-4">
                  Developed innovative cooling system for high-performance electronics, reducing operating temperature
                  by 25%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Thermal Analysis</Badge>
                  <Badge>CFD</Badge>
                  <Badge>Heat Transfer</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-400 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Sustainable+Design"
                  alt="Sustainable Product Design"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl text-blue-600 mb-3">Sustainable Product Design</CardTitle>
                <p className="text-gray-600 mb-4">
                  Eco-friendly product design reducing material waste by 35% while maintaining structural integrity.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Sustainability</Badge>
                  <Badge>Material Science</Badge>
                  <Badge>FEA</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
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

"use client"

import Link from "next/link"
import { ArrowLeft, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import NavigationSidebar from "@/components/navigation-sidebar"
import DataFlow from "@/components/background-motions/data-flow"

export default function EducationPage() {
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
            Education
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Academic Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Fine Arts in Digital Media</h3>
                <p className="text-purple-600 font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Art Institute of California • 2014 - 2018
                </p>
                <p className="text-gray-700 mb-4">
                  Specialized in Digital Video Production and Motion Graphics. Senior Project: "Interactive Brand
                  Experience for Sustainable Fashion"
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Summa Cum Laude</Badge>
                  <Badge>Dean's List</Badge>
                  <Badge>Outstanding Student Award</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-200">
            <CardContent className="p-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Certificate in Advanced Motion Graphics</h3>
                <p className="text-purple-600 font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  School of Motion • 2019
                </p>
                <p className="text-gray-700 mb-4">
                  Intensive program focusing on advanced After Effects techniques, 3D motion graphics, and professional
                  workflow optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Top 5% of Class</Badge>
                  <Badge>Portfolio Excellence</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-400">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600">Certifications & Training</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Adobe Certified Expert</h4>
                  <p className="text-sm text-gray-600">Adobe Systems • 2020</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">DaVinci Resolve Certification</h4>
                  <p className="text-sm text-gray-600">Blackmagic Design • 2021</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Google Creative Certification</h4>
                  <p className="text-sm text-gray-600">Google • 2022</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Cinema 4D Professional</h4>
                  <p className="text-sm text-gray-600">Maxon • 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

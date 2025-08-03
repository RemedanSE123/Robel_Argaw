"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import NavigationSidebar from "@/components/navigation-sidebar"
import DataFlow from "@/components/background-motions/data-flow"

export default function ExperiencePage() {
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
            Experience
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up">
            <CardContent className="p-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior Creative Designer</h3>
                <p className="text-purple-600 font-semibold text-lg mb-4">Digital Media Agency • 2022 - Present</p>
                <ul className="text-gray-700 space-y-2 text-lg">
                  <li>• Leading creative campaigns for Fortune 500 companies</li>
                  <li>• Managing video production from concept to delivery</li>
                  <li>• Developing comprehensive brand identity systems</li>
                  <li>• Increased client engagement rates by 45% through innovative design</li>
                  <li>• Mentoring junior designers and establishing creative workflows</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-200">
            <CardContent className="p-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Video Editor & Motion Graphics Artist</h3>
                <p className="text-purple-600 font-semibold text-lg mb-4">Creative Studios • 2020 - 2022</p>
                <ul className="text-gray-700 space-y-2 text-lg">
                  <li>• Produced high-quality video content for various industries</li>
                  <li>• Created motion graphics for advertising campaigns</li>
                  <li>• Collaborated with clients to bring creative visions to life</li>
                  <li>• Delivered 200+ projects with 98% client satisfaction rate</li>
                  <li>• Specialized in color grading and audio post-production</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-400">
            <CardContent className="p-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Freelance Graphic Designer</h3>
                <p className="text-purple-600 font-semibold text-lg mb-4">Self-Employed • 2018 - 2020</p>
                <ul className="text-gray-700 space-y-2 text-lg">
                  <li>• Designed brand identities for startups and small businesses</li>
                  <li>• Created marketing materials and digital assets</li>
                  <li>• Built a client base of 50+ satisfied customers</li>
                  <li>• Developed expertise in Adobe Creative Suite</li>
                  <li>• Managed all aspects of client relationships and project delivery</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

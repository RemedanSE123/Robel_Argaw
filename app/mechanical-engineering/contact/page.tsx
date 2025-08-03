"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle, Send, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NavigationSidebar from "@/components/navigation-sidebar"
import StarfieldAnimation from "@/components/background-motions/starfield-animation"

export default function ContactPage() {
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
            Contact Me
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-lg">
                  Ready to discuss your next engineering project? I'd love to hear about your challenges and explore how
                  we can work together to create innovative solutions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">robel.aragew@email.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-up delay-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700">
                  Let's connect on your preferred platform and start a conversation about your engineering needs.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                    </div>
                  </a>

                  <a href="https://t.me/your-username" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900">Telegram</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                      <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900">LinkedIn</p>
                    </div>
                  </a>

                  <a href="mailto:robel.aragew@email.com" className="group">
                    <div className="flex flex-col items-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-300">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900">Email</p>
                    </div>
                  </a>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">Schedule a Consultation</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

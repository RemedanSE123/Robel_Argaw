"use client"

import { useState } from "react"
import Link from "next/link"
import { User, Briefcase, GraduationCap, FolderOpen, Mail } from "lucide-react"

interface NavigationSidebarProps {
  basePath: string
}

const navigationItems = [
  { id: "about", name: "About Me", icon: User, path: "/about" },
  { id: "experience", name: "Experience", icon: Briefcase, path: "/experience" },
  { id: "education", name: "Education", icon: GraduationCap, path: "/education" },
  { id: "projects", name: "Projects", icon: FolderOpen, path: "/projects" },
  { id: "contact", name: "Contact", icon: Mail, path: "/contact" },
]

export default function NavigationSidebar({ basePath }: NavigationSidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col gap-4 pr-6">
        {navigationItems.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="relative group">
              <Link
                href={`${basePath}${item.path}`}
                className="flex items-center justify-center w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/30"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
              </Link>

              {/* Tooltip */}
              <div
                className={`absolute right-16 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
                  hoveredItem === item.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
                }`}
              >
                {item.name}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

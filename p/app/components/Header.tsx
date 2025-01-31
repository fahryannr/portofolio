"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Code } from "lucide-react"
import Link from "next/link"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = ["home", "about", "projects", "skills"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", icon: Home },
    { name: "About", icon: User },
    { name: "Projects", icon: Briefcase },
    { name: "Skills", icon: Code },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
      <nav
        className={`max-w-5xl mx-auto px-4 ${isScrolled ? "bg-white/10" : "bg-transparent"} backdrop-blur-md rounded-full border border-white/10 shadow-lg transition-all duration-300`}
      >
        <ul className="flex justify-center items-center space-x-1 md:space-x-4 py-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={`#${item.name.toLowerCase()}`}>
                <motion.div
                  className={`flex items-center px-3 py-2 rounded-full transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? "bg-electric-blue text-black"
                      : "text-white hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  <span className="hidden md:inline text-sm font-medium">{item.name}</span>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header


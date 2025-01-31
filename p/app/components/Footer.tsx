"use client"

import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail, Instagram } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    { icon: GitHub, href: "https://github.com/fahryannr", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/fhrynnr?igsh=NDlqeWZvb2R0ZXhh", label: "Instagram" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ]

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-display text-electric-blue mb-2">Fahryan Rizky Pratama</h3>
            <p className="text-gray-400">Web Developer & Designer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-electric-blue transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Fahryan Rizky Pratama. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


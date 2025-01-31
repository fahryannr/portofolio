"use client"

import { ParallaxProvider } from "react-scroll-parallax"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="bg-black text-white font-sans">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  )
}


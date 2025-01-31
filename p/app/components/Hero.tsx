"use client"

import { Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Parallax translateY={[-20, 20]} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple to-electric-blue opacity-50" />
      </Parallax>
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-8 md:mb-0 md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-display mb-4">
            Halo, saya{" "}
            <TypeAnimation
              sequence={["Fahryan Rizky Pratama", 2000, "seorang Pengembang", 2000, "seorang Desainer", 2000]}
              wrapper="span"
              cursor={true}
              repeat={Number.POSITIVE_INFINITY}
              className="text-electric-blue"
            />
          </h1>
          <p className="text-xl md:text-2xl mb-8">Mengubah ide menjadi kenyataan melalui kode dan desain</p>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-electric-blue text-black px-8 py-3 rounded-full font-display hover:bg-neon-purple hover:text-white transition-colors inline-block"
          >
            Jelajahi Karya Saya
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative md:w-1/2 flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-electric-blue shadow-lg">
            <Image
              src='https://th.bing.com/th/id/OIP.bWVHde5DQRyUb3SlvHY1VwAAAA?pid=ImgDet&w=178&h=178&c=7&dpr=1,5'
              alt="Fahryan Rizky Pratama"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero


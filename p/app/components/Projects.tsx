"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const proyek = [
  {
    title: "Platform E-commerce",
    description: "Situs e-commerce responsif penuh dengan fitur keranjang belanja dan integrasi pembayaran.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Aplikasi Manajemen Tugas",
    description: "Aplikasi manajemen tugas kolaboratif dengan pembaruan waktu nyata dan fitur tim.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Pelacak Kebugaran",
    description: "Aplikasi pelacakan kebugaran mobile-first dengan rencana latihan dan visualisasi progres.",
    image:
      "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
    technologies: ["React Native", "Firebase"],
    link: "#",
  },
]

const Proyek = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-4xl font-display text-neon-purple mb-12 text-center"
        >
          Proyek Saya
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {proyek.map((proyek, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-electric-blue transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={proyek.image || "/placeholder.svg"}
                  alt={proyek.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display text-electric-blue mb-4">{proyek.title}</h3>
                <p className="text-gray-300 mb-4">{proyek.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyek.technologies.map((tech, i) => (
                    <span key={i} className="bg-neon-purple text-white px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={proyek.link}
                  className="inline-block bg-electric-blue text-black px-4 py-2 rounded font-display hover:bg-neon-purple hover:text-white transition-colors"
                >
                  Lihat Proyek
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Proyek


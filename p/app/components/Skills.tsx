"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "UI/UX Design", "Responsive Web Design"]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-4xl font-display text-electric-blue mb-12 text-center"
        >
          My Skills
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-700 px-6 py-3 rounded-full text-electric-blue font-display hover:bg-electric-blue hover:text-gray-900 transition-colors duration-300 shadow-lg"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


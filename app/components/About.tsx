"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette, Globe } from "lucide-react";

const Tentang = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const layanan = [
    {
      icon: Code,
      title: "Pengembangan Web",
      description: "Membangun aplikasi web yang responsif dan berkinerja tinggi menggunakan teknologi modern.",
    },
    {
      icon: Palette,
      title: "Desain UI/UX",
      description: "Membuat antarmuka dan pengalaman pengguna yang intuitif serta menarik secara visual.",
    },
    {
      icon: Globe,
      title: "Optimasi SEO",
      description: "Meningkatkan visibilitas dan peringkat situs web di hasil pencarian mesin pencari.",
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-4xl font-display text-electric-blue mb-12 text-center"
        >
          Tentang Saya
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg mb-6">
            Dengan lebih dari 5 tahun pengalaman dalam pengembangan dan desain web, saya mengkhususkan diri dalam
            menciptakan situs web yang menakjubkan dan fungsional yang meninggalkan kesan mendalam. Saya bersemangat
            untuk mengubah ide kompleks menjadi solusi digital yang mudah digunakan.
          </p>
          <p className="text-lg">
            Saya terus belajar dan beradaptasi dengan teknologi terbaru, memastikan bahwa saya dapat menawarkan solusi
            terbaik kepada klien saya. Baik Anda membutuhkan halaman landing sederhana atau aplikasi web yang kompleks,
            saya siap mewujudkan visi Anda.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {layanan.map((layanan, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-electric-blue transition-shadow duration-300"
            >
              <layanan.icon className="w-12 h-12 text-electric-blue mb-4 mx-auto" />
              <h3 className="text-xl font-display text-electric-blue mb-4 text-center">{layanan.title}</h3>
              <p className="text-gray-300 text-center">{layanan.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tentang;


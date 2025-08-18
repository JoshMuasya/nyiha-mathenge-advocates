"use client"

import { motion } from "framer-motion"
import React from "react"

const Hero = ({
  title = "Practice Areas",
  subtitle = "Comprehensive legal services across multiple practice areas. Our experienced attorneys provide expert representation tailored to your specific needs.",
}: {
  title?: string
  subtitle?: string
}) => {
  return (
    <header className="relative py-20 md:py-28 bg-gradient-to-r from-primary to-accent text-center overflow-hidden">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" },
            },
          }}
          className="max-w-3xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6 drop-shadow-lg"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-base md:text-xl text-primary-foreground/90 leading-relaxed mb-8 px-2"
          >
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <button className="px-6 py-3 bg-primary-foreground text-primary font-medium rounded-2xl shadow-lg hover:scale-105 transition-transform">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero

"use client"

import { motion } from "framer-motion"
import React from 'react'

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-l from-background to-secondary overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Ready to discuss your legal needs? We're here to help. Contact us today 
            for a free consultation and let our experienced team guide you through 
            your legal challenges.
          </p>
        </motion.div>
      </div>

      {/* Optional subtle overlay or decorative elements */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
    </section>
  )
}

export default Hero

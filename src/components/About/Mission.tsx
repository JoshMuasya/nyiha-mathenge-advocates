"use client"

import { motion } from "framer-motion"
import React from 'react'

const Mission = () => {
  return (
    <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              "To provide exceptional legal representation while maintaining the highest standards 
              of integrity, professionalism, and client service. We are committed to protecting 
              our clients' rights and achieving the best possible outcomes through strategic thinking, 
              thorough preparation, and unwavering dedication."
            </p>
            <div className="w-24 h-1 bg-primary-light mx-auto"></div>
          </motion.div>
        </div>
      </section>
  )
}

export default Mission

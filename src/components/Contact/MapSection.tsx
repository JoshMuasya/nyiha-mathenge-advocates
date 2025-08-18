"use client"

import { motion } from "framer-motion"
import React from "react"

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
}

const MapSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Visit Our Office
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Located in the heart of Westlands, our office is easily accessible and offers convenient parking for all clients.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-[0_20px_40px_var(--tw-shadow-color)] shadow-primary/50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8524569715973!2d36.80117737372744!3d-1.2607462355961419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173f254ef62f%3A0xeb15618740b6ee3f!2sWestlands%20commercial%20center!5e0!3m2!1sen!2ske!4v1755499488305!5m2!1sen!2ske"
            className="w-full h-64 sm:h-96 lg:h-[28rem]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nyiha Mathenge Advocates Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}

export default MapSection

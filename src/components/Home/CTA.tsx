"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { usePathname, useRouter } from "next/navigation"

const CTA = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleSecondClick = () => {
    if (pathname === "/") {
      router.push("/practice-areas")
    } else {
      router.push("/")
    }
  }

  return (
    <section
      className="relative py-20 bg-gradient-to-r from-primary to-accent overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-none"></div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 drop-shadow-lg"
          >
            Ready to Get Started?
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Contact us today for a free consultation. Let our experienced legal team
            help you navigate your legal challenges with confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-accent hover:text-primary-foreground transition-colors duration-300 shadow-lg shadow-primary/20"
                onClick={() => router.push("/contact")}
                aria-label="Schedule a free consultation"
              >
                Schedule Free Consultation
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground hover:border-0 text-primary-foreground bg-transparent
                           hover:bg-accent/90 hover:text-primary transition-colors duration-300"
                onClick={() => { handleSecondClick }}
                aria-label="View our practice areas"
              >
                {pathname === "/" ? "View Practice Areas" : "Back to Home"}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

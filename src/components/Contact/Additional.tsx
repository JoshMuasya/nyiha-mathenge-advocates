"use client"

import { motion, Variants } from "framer-motion"
import React from 'react'

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
}

const Additional = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Office Hours */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">
              Office Hours
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-medium text-foreground">Monday - Friday</span>
                <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-medium text-foreground">Saturday</span>
                <span className="text-muted-foreground">10:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-foreground">Sunday</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-accent/10 rounded-lg">
              <p className="text-sm text-accent font-medium">
                Emergency consultations available outside regular hours by appointment.
              </p>
            </div>
          </motion.div>

          {/* What to Expect */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">
              What to Expect
            </h3>
            <div className="space-y-4">
              {[
                { step: 1, title: "Initial Consultation", description: "Free 30-minute consultation to discuss your case and legal options." },
                { step: 2, title: "Case Assessment", description: "Thorough review of your situation and development of legal strategy." },
                { step: 3, title: "Representation", description: "Professional legal representation with regular updates on your case progress." },
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-3">
                  <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-foreground font-bold text-sm">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Additional

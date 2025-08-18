"use client"

import React from 'react'
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section className="py-20 bg-gradient-to-l from-background to-secondary">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
                        About Nyiha Mathenge Advocates
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Founded on principles of integrity, excellence, and unwavering dedication to justice,
                        Blue Accord Law has been serving clients with distinction for over 15 years.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero

"use client"

import { motion } from "framer-motion"
import React from 'react'
import Image from "next/image"

const Attorney = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Image
                            src=""
                            alt="Lead Attorney"
                            width={100}
                            height={100}
                            className="rounded-2xl shadow-strong w-full"
                        />
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-primary/70 to-accent rounded-2xl opacity-20"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                            Meet Our Lead Attorney
                        </h2>
                        <h3 className="text-2xl font-semibold text-accent mb-4">
                            Nyiha Mathenge, LL.M
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            With over 15 years of experience in the legal field, John Mitchell brings a wealth
                            of knowledge and expertise to Nyiha Mathenge Advocates. Nyiha has successfully represented clients in complex litigation, corporate transactions,
                            and family law matters.
                        </p>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Nyiha's approach to law is both strategic and compassionate, ensuring that each client
                            receives personalized attention while benefiting from his extensive legal expertise.
                            He is admitted to practice in multiple jurisdictions and maintains active memberships
                            in several professional legal organizations.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-foreground">N.M., Law School</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-foreground">15+ Years Legal Experience</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-foreground">State Bar Association Member</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-foreground">Certified in Multiple Practice Areas</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Attorney

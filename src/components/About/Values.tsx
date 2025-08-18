"use client"

import { motion } from "framer-motion"
import React from 'react'
import { Card, CardContent } from "../ui/card"
import { Heart, Scale, Target, Users } from "lucide-react"

const Values = () => {
    const values = [
        {
            icon: Scale,
            title: "Integrity",
            description: "We uphold the highest ethical standards in all our legal practices and client relationships."
        },
        {
            icon: Heart,
            title: "Compassion",
            description: "We understand that legal issues can be stressful and approach each case with empathy and care."
        },
        {
            icon: Target,
            title: "Excellence",
            description: "We strive for excellence in every case, providing thorough and strategic legal representation."
        },
        {
            icon: Users,
            title: "Client-Focused",
            description: "Our clients' needs and goals are at the center of everything we do."
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                        Our Core Values
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        These fundamental principles guide our practice and shape every interaction
                        we have with our clients and the legal community.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full text-center hover:shadow-medium transition-all duration-300 group">
                                <CardContent className="p-8">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-16 h-16 bg-gradient-to-r from-primary/70 to-accent/70 backdrop-blur-md rounded-2xl 
                               flex items-center justify-center mb-6 group-hover:scale-110 
                               transition-transform shadow-md"
                                    >
                                        <value.icon className="w-8 h-8 text-primary-foreground" />
                                    </motion.div>
                                    <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Values

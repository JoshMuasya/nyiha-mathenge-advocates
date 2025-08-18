"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import {
    Briefcase,
    Building,
    FileText,
    Scale,
    Shield,
    Users,
} from "lucide-react";

const practiceAreas = [
    {
        icon: Scale,
        title: "Criminal Defense",
        description:
            "Expert defense representation for all criminal matters with a proven track record.",
        features: ["DUI Defense", "Drug Crimes", "White Collar Crimes", "Appeals"],
    },
    {
        icon: Building,
        title: "Corporate Law",
        description:
            "Comprehensive business legal services from startup to enterprise level.",
        features: [
            "Business Formation",
            "Contracts",
            "Mergers & Acquisitions",
            "Compliance",
        ],
    },
    {
        icon: Users,
        title: "Family Law",
        description:
            "Compassionate legal guidance for sensitive family matters and relationships.",
        features: ["Divorce", "Child Custody", "Adoption", "Prenuptial Agreements"],
    },
    {
        icon: FileText,
        title: "Personal Injury",
        description:
            "Fighting for maximum compensation for accident victims and their families.",
        features: [
            "Car Accidents",
            "Medical Malpractice",
            "Workplace Injuries",
            "Wrongful Death",
        ],
    },
    {
        icon: Shield,
        title: "Estate Planning",
        description:
            "Protecting your legacy and securing your family's financial future.",
        features: ["Wills & Trusts", "Estate Administration", "Tax Planning", "Asset Protection"],
    },
    {
        icon: Briefcase,
        title: "Employment Law",
        description:
            "Protecting employee rights and resolving workplace disputes effectively.",
        features: [
            "Wrongful Termination",
            "Discrimination",
            "Harassment",
            "Wage Disputes",
        ],
    },
];

const PracticeArea = () => {
    return (
        <section
            className="py-20 bg-gradient-to-l from-background to-secondary"
            aria-labelledby="practice-areas-title"
        >
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2
                        id="practice-areas-title"
                        className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
                    >
                        Practice Areas
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our experienced legal team provides comprehensive representation
                        across multiple practice areas, ensuring expert guidance for all
                        your legal needs.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {practiceAreas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className="h-full transition-all duration-300 group cursor-pointer focus-within:ring-2 focus-within:ring-accent focus:outline-none">
                                <CardContent className="p-8 flex flex-col h-full">
                                    {/* Floating Icon */}
                                    <motion.div
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 3,
                                            ease: "easeInOut",
                                        }}
                                        className="w-16 h-16 bg-gradient-to-r from-primary/70 to-accent/70 backdrop-blur-md rounded-2xl 
                               flex items-center justify-center mb-6 group-hover:scale-110 
                               transition-transform shadow-md"
                                    >
                                        <area.icon
                                            className="w-8 h-8 text-primary-foreground"
                                            aria-hidden="true"
                                        />
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-serif font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                                        {area.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                                        {area.description}
                                    </p>

                                    {/* Features */}
                                    <ul
                                        aria-label={`${area.title} services`}
                                        className="space-y-2"
                                    >
                                        {area.features.map((feature, featureIndex) => (
                                            <li
                                                key={featureIndex}
                                                className="flex items-center text-sm text-foreground"
                                            >
                                                <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeArea;

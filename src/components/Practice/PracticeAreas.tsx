"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building, CheckCircle, Scale, Users } from "lucide-react"
import React from "react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

// Variants for animations
const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: custom * 0.15,
            ease: "easeOut" as const, // 👈 cast to const so TS accepts it
        },
    }),
}

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            delay: custom * 0.05,
            ease: "easeOut" as const,
        },
    }),
}


const PracticeAreas = () => {
    const router = useRouter()

    const practiceAreas = [
        {
            icon: Scale,
            title: "Criminal Defense",
            description:
                "Comprehensive criminal defense representation with a focus on protecting your rights and achieving the best possible outcome.",
            services: [
                "DUI/DWI Defense",
                "Drug Crime Defense",
                "White Collar Crimes",
                "Assault & Battery",
                "Theft & Property Crimes",
                "Traffic Violations",
                "Appeals & Post-Conviction Relief",
            ],
            details:
                "Our criminal defense team has successfully defended clients against a wide range of charges. We understand the serious consequences of criminal convictions and work tirelessly to protect your freedom, reputation, and future.",
        },
        {
            icon: Building,
            title: "Corporate Law",
            description:
                "Complete business legal services from entity formation to complex commercial transactions and ongoing compliance.",
            services: [
                "Business Entity Formation",
                "Contract Drafting & Review",
                "Mergers & Acquisitions",
                "Corporate Governance",
                "Commercial Litigation",
                "Employment Law Compliance",
                "Intellectual Property Protection",
            ],
            details:
                "We serve businesses of all sizes, from startups to established corporations. Our corporate law practice focuses on helping businesses navigate legal challenges while maximizing opportunities for growth and success.",
        },
        {
            icon: Users,
            title: "Family Law",
            description:
                "Compassionate legal guidance for family matters with a focus on protecting your interests and your children's well-being.",
            services: [
                "Divorce & Legal Separation",
                "Child Custody & Support",
                "Spousal Support/Alimony",
                "Adoption Services",
                "Prenuptial Agreements",
                "Domestic Violence Protection",
                "Property Division",
            ],
            details:
                "Family law matters are often emotionally challenging. We provide both legal expertise and emotional support to help you navigate these difficult times while protecting your family's future.",
        },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="space-y-16">
                    {practiceAreas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={index}
                        >
                            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                                        {/* Header Section */}
                                        <div className="lg:col-span-1 bg-gradient-to-r from-primary to-accent p-6 md:p-8 text-primary-foreground flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center space-x-4 mb-6">
                                                    <div className="w-14 h-14 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
                                                        <area.icon className="w-7 h-7 text-primary-foreground" />
                                                    </div>
                                                    <h2 className="text-2xl font-serif font-bold">{area.title}</h2>
                                                </div>
                                                <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-prose">
                                                    {area.description}
                                                </p>
                                            </div>
                                            <Button
                                                variant="secondary"
                                                className="w-full group mt-auto"
                                                onClick={() => router.push("/contact")}
                                            >
                                                Get {area.title}
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>

                                        {/* Services List */}
                                        <div className="lg:col-span-1 p-6 md:p-8 bg-secondary rounded-lg lg:rounded-none">
                                            <h3 className="text-xl font-semibold text-primary mb-6">
                                                Our Services Include:
                                            </h3>
                                            <motion.ul
                                                className="space-y-3"
                                                role="list"
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >
                                                {area.services.map((service: string, serviceIndex: number) => (
                                                    <motion.li
                                                        key={serviceIndex}
                                                        role="listitem"
                                                        variants={listItemVariants}
                                                        custom={serviceIndex}
                                                        className="flex items-start space-x-3"
                                                    >
                                                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                                        <span className="text-foreground">{service}</span>
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        </div>

                                        {/* Details */}
                                        <div className="lg:col-span-1 p-6 md:p-8">
                                            <h3 className="text-xl font-semibold text-primary mb-6">
                                                How We Help
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed mb-6 max-w-prose">
                                                {area.details}
                                            </p>
                                            <div className="bg-accent/10 rounded-lg p-4">
                                                <p className="text-sm text-accent font-medium">
                                                    💡 Free initial consultation available for all{" "}
                                                    {area.title.toLowerCase()} matters.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PracticeAreas

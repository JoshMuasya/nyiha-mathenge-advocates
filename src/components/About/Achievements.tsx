"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Award, BookOpen, Users } from "lucide-react";

const Achievements = () => {
    const achievement = [
    {
      icon: Award,
      title: "Legal Excellence Award",
      year: "2023",
      description: "Recognized for outstanding legal service and client satisfaction"
    },
    {
      icon: Users,
      title: "500+ Successful Cases",
      year: "2024",
      description: "Milestone achievement in client representation across all practice areas"
    },
    {
      icon: BookOpen,
      title: "Bar Association Leadership",
      year: "2022",
      description: "Active participation in local bar association committees and initiatives"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by clients and peers alike.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievement.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-[0_8px_40px_var(--tw-shadow-color)] shadow-primary/30 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/70 to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <achievement.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                      {achievement.title}
                    </h3>
                    <div className="text-2xl font-bold text-accent mb-4">
                      {achievement.year}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
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

export default Achievements

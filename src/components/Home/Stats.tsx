"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Clock, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: CheckCircle, value: "95%", label: "Success Rate" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/60 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="text-center group"
              role="region"
              aria-label={`${stat.value} ${stat.label}`}
            >
              {/* floating icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center"
              >
                <stat.icon className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
              </motion.div>

              {/* value (no counting) */}
              <div
                className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2 leading-none"
                aria-hidden="true"
              >
                {stat.value}
              </div>

              {/* label */}
              <div className="text-sm sm:text-base md:text-lg text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

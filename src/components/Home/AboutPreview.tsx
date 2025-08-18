"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const AboutPreview = () => {
  const router = useRouter();

  const features = [
    "Experienced legal professionals with proven track records",
    "Personalized attention and tailored legal strategies",
    "Transparent communication throughout your case",
    "Committed to achieving the best possible outcomes",
  ];

  return (
    <section
      className="py-20 bg-background"
      aria-labelledby="about-preview-title"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              id="about-preview-title"
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
            >
              Why Choose Nyiha Mathenge Advocates?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              With over{" "}
              <span className="font-semibold text-foreground">
                15 years of combined experience
              </span>
              , our team of dedicated attorneys brings deep expertise across
              multiple practice areas. We pride ourselves on providing
              personalized attention to each client while delivering exceptional
              results.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle
                    className="w-6 h-6 text-accent mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              onClick={() => router.push("/about")}
              className="bg-gradient-to-r from-primary to-accent group"
              size="lg"
              aria-label="Learn more about Nyiha Mathenge Advocates"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
                alt="Professional law office workspace"
                className="rounded-2xl shadow-[0_8px_40px_var(--tw-shadow-color)] shadow-primary/30 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full gradient-primary rounded-2xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

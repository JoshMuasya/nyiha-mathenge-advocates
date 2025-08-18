"use client";

import { HeroSectionProps } from "@/lib/types";
import { motion } from "framer-motion";
import { ArrowRight, Info, Scale } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = ({
  title,
  subtitle,
  description,
  primaryCta = "Get Started",
  secondaryCta = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  showPatternOverlay = true,
}: HeroSectionProps) => {
  const titleWords = title.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/landing.jpg"
          alt="Professional law office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-accent/70 opacity-70"></div>
      </div>

      {/* Optional Pattern Overlay */}
      {showPatternOverlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
      )}

      {/* Floating Legal Icon (slow rotate) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1, rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2"
      >
        <Scale className="w-40 h-40 text-primary-foreground" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glassmorphism Overlay Behind Content */}
          <div className="backdrop-blur-md bg-white/10 p-6 md:p-10 rounded-2xl shadow-lg">
            {/* Tagline */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-sm md:text-base uppercase tracking-widest text-accent font-semibold mb-3"
            >
              Your Trusted Legal Partner
            </motion.span>

            {/* Animated Title with Gradient */}
            <motion.h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className={`inline-block mr-3 ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                      : "text-primary-foreground"
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-2xl text-primary-foreground/90 font-light mb-8 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.h2>

            {/* Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-base md:text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto"
              >
                {description}
              </motion.p>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="relative bg-primary-foreground text-primary hover:bg-accent/90 
                           shadow-[0_8px_30px_var(--tw-shadow-color)] shadow-primary/30 group overflow-hidden"
                onClick={onPrimaryClick}
              >
                <span className="relative z-10 flex items-center">
                  {primaryCta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Subtle glow effect */}
                <span className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground hover:border-0 text-primary-foreground bg-transparent
                           hover:bg-accent/90 hover:text-primary flex items-center gap-2"
                onClick={onSecondaryClick}
              >
                <Info className="w-5 h-5" />
                {secondaryCta}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-primary-foreground/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

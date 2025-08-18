"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { useState } from "react"

export default function ComingSoon() {
  const [email, setEmail] = useState("")

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="text-center px-6 max-w-lg">
        {/* Logo or Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold font-serif mb-6"
        >
          Nyiha Mathenge Advocates
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-8"
        >
          Our website is under construction.  
          We’re launching <span className="font-semibold">soon</span>!
        </motion.p>

        {/* Email Notify Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center bg-background/20 backdrop-blur-lg rounded-full overflow-hidden max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault()
            alert(`Thanks! We'll notify ${email} when we launch.`)
            setEmail("")
          }}
        >
          <Mail className="ml-3 w-5 h-5 text-primary-light" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-transparent px-3 py-2 focus:outline-none text-primary-foreground placeholder-primary-foreground/50"
          />
          <button
            type="submit"
            className="bg-primary-light px-5 py-2 text-sm font-medium hover:bg-primary rounded-r-full transition-colors"
          >
            Notify Me
          </button>
        </motion.form>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 text-primary-foreground/60 text-sm"
        >
          &copy; {new Date().getFullYear()} Nyiha Mathenge Advocates. All rights reserved.
        </motion.p>
      </div>
    </div>
  )
}

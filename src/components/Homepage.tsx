"use client"

import React from 'react'
import Hero from './Home/Hero'
import { useRouter } from 'next/navigation'
import Stats from './Home/Stats'
import AboutPreview from './Home/AboutPreview'
import PracticeArea from './Home/PracticeArea'
import CTA from './Home/CTA'

const Homepage = () => {
    const router = useRouter()

  return (
    <div>
      <Hero
        title="Expert Legal Representation"
        subtitle="Your Trusted Advocates in the Pursuit of Justice"
        description="Professional legal services with integrity, expertise, and unwavering dedication to protecting your rights and interests."
        primaryCta="Free Consultation"
        secondaryCta="Our Services"
        onPrimaryClick={() => router.push("/contact")}
        onSecondaryClick={() => router.push("/practice-areas")}
      />

      <Stats />

      <AboutPreview />

      <PracticeArea />

      <CTA />
    </div>
  )
}

export default Homepage

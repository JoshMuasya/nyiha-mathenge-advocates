
import CTA from '@/components/Home/CTA'
import Hero from '@/components/Practice/Hero'
import PracticeAreas from '@/components/Practice/PracticeAreas'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      <PracticeAreas />
      <CTA />
    </div>
  )
}

export default page

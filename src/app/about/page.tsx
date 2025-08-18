import Achievements from '@/components/About/Achievements'
import Attorney from '@/components/About/Attorney'
import Hero from '@/components/About/Hero'
import Mission from '@/components/About/Mission'
import Values from '@/components/About/Values'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      <Attorney />
      <Mission />
      <Values />
      <Achievements />
    </div>
  )
}

export default page

import ComingSoon from '@/components/ComingSoon'
import Additional from '@/components/Contact/Additional'
import ContactForm from '@/components/Contact/ContactForm'
import Hero from '@/components/Contact/Hero'
import MapSection from '@/components/Contact/MapSection'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      <ContactForm />
      <MapSection />
      <Additional />
    </div>
  )
}

export default page

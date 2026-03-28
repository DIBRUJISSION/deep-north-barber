'use client'

import { CheckCircle2 } from 'lucide-react'

const trustPoints = [
  {
    title: 'Tailored to You',
    description: 'Every cut is customized to your head shape, hair texture, and lifestyle',
  },
  {
    title: 'Expert Precision',
    description: 'Clean fades, structural beard work, and refined detailing in every service',
  },
  {
    title: 'No-Rush Experience',
    description: 'Calm, focused appointments in a boutique environment without the noise',
  },
  {
    title: 'Clean Finishes',
    description: 'Results that last. Professional standards from cut to completion',
  },
  {
    title: 'Local in Gordon',
    description: 'Premium barbering in the heart of the North Shore since [year]',
  },
  {
    title: 'Online Booking',
    description: 'Reserve your appointment instantly with real-time availability',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-charcoal/50 border-y border-brand-steel-grey py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-bronze flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold tracking-wide mb-2 text-brand-bone">{point.title}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

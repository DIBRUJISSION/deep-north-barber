'use client'

import { ArrowRight } from 'lucide-react'

const reasons = [
  {
    title: 'Tailored to Head Shape',
    description: 'Not a template. Every cut respects your unique head geometry, hair growth patterns, and lifestyle demands.',
  },
  {
    title: 'No-Rush Appointments',
    description: 'Calm, focused sessions without pressure or haste. Time is given to get it right.',
  },
  {
    title: 'Precision in Every Detail',
    description: 'From blade maintenance to line work to final check. Every detail matters.',
  },
  {
    title: 'Clean Finishes That Last',
    description: 'Results designed to age beautifully. Your cut stays sharp longer because it\'s built right.',
  },
  {
    title: 'Classic Craft, Modern Standards',
    description: 'Traditional barbering technique with contemporary execution, hygiene, and professionalism.',
  },
  {
    title: 'Boutique, Not Production Line',
    description: 'One barber. Full attention. Real conversation. Personal service every time.',
  },
]

export default function WhyChoose() {
  return (
    <section className="section-container bg-brand-charcoal/50 border-y border-brand-steel-grey">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="section-header text-center mb-20">
          <h2 className="section-title mb-6">Why Choose Deep North</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We're not another barber template. We're a standard for what precision and care look like.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-bronze/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-bronze/40 transition-colors">
                  <ArrowRight size={18} className="text-brand-bronze" />
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2 text-brand-bone group-hover:text-brand-bronze transition-colors">
                {reason.title}
              </h3>
              <p className="text-brand-grey leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-brand-steel-grey text-center">
          <p className="text-brand-grey mb-8 text-lg">
            Standards like these are rare. Let's get you in.
          </p>
          <a
            href="https://deepnorthbarber.gettimely.com/#home"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-block"
          >
            Book Your Cut
          </a>
        </div>
      </div>
    </section>
  )
}

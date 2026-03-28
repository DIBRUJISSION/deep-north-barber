'use client'

import ScrollReveal from './ScrollReveal'

const services = [
  {
    name: 'Signature Haircut',
    duration: '25 mins',
    price: '$42',
    description: 'The foundation. Precision cut tailored to your head shape, hair texture, and style. Clean lines, sharp fades, structured finish.',
  },
  {
    name: 'Skin Fade',
    duration: '30 mins',
    price: '$49',
    description: 'Modern sharp fade executed with precision. Gradual blend from skin to length, designed for clean results that age well.',
  },
  {
    name: 'Classic Straight Razor Shave',
    duration: '25 mins',
    price: '$42',
    description: 'Traditional technique, modern precision. Hot towel, quality lather, single-pass shave for smooth skin and refined finish.',
  },
  {
    name: 'Beard Trim',
    duration: '20 mins',
    price: '$30',
    description: 'Structured beard shaping with attention to line work. Keeps your beard sharp, maintained, and intentional.',
  },
  {
    name: 'Haircut + Beard Combination',
    duration: '45 mins',
    price: '$72',
    description: 'The complete package. Head-to-toe precision. Get both cut and beard work done right in one focused session.',
  },
  {
    name: 'Scissor Cut – Medium / Long Hair',
    duration: '30 mins',
    price: '$49',
    description: 'Refined scissor work for longer lengths. Texturing, shaping, and layering designed for natural movement and clean aesthetics.',
  },
  {
    name: 'Clean Head Shave',
    duration: '25 mins',
    price: '$42',
    description: 'Smooth, clean shave for a polished look. Expert technique for comfortable results and skin care.',
  },
  {
    name: 'Buzz Cut',
    duration: '15 mins',
    price: '$29',
    description: 'Sharp, clean, and quick. Precision buzz cut with attention to detail around edges and shape.',
  },
  {
    name: 'Kids Cut (Under 12)',
    duration: '20 mins',
    price: '$30',
    description: 'Quality haircut for young clients. Patient, clean work, and sharp results to build confidence.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-container bg-brand-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header">
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-brand-bronze rounded-full"></div>
              <span className="text-xs uppercase tracking-widest text-brand-grey">What We Offer</span>
            </div>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Every service executed with precision. Every appointment a standard.</p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div
                className="service-card border border-brand-steel-grey bg-brand-charcoal/40 p-8 rounded-lg hover:border-brand-bronze transition-all duration-300 group h-full"
              >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold tracking-tight text-brand-bone flex-1 mr-4">
                  {service.name}
                </h3>
              </div>

              <p className="text-sm text-brand-grey leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex justify-between items-end pt-6 border-t border-brand-steel-grey">
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-grey mb-1">Duration</p>
                  <p className="font-bold text-brand-bone">{service.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-brand-grey mb-1">Price</p>
                  <p className="text-2xl font-bold text-brand-bronze">{service.price}</p>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <p className="text-brand-grey mb-8">Ready to experience the difference?</p>
            <a
              href="https://deepnorthbarber.gettimely.com/#home"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-block"
            >
              Book Your Appointment
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

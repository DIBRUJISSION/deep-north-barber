'use client'

import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const galleryItems = [
  {
    title: 'Skin Fade with Sharp Detailing',
    category: 'Fades',
  },
  {
    title: 'Clean Scissor Work with Natural Movement',
    category: 'Cuts',
  },
  {
    title: 'Structured Beard Shaping',
    category: 'Beard Work',
  },
  {
    title: 'Tailored Finish for Everyday Wear',
    category: 'Signature Cut',
  },
  {
    title: 'Modern Long Hair Texturing',
    category: 'Long Hair',
  },
  {
    title: 'Classic Line Work Precision',
    category: 'Details',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-container bg-brand-charcoal/50 border-t border-brand-steel-grey">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header">
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-brand-bronze rounded-full"></div>
              <span className="text-xs uppercase tracking-widest text-brand-grey">Our Work</span>
            </div>
            <h2 className="section-title">Results That Speak</h2>
            <p className="section-subtitle">Editorial. Sharp. Real work from real clients.</p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="gallery-item bg-gradient-to-br from-brand-charcoal to-brand-black border border-brand-steel-grey group hover:border-brand-bronze transition-all duration-300 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl relative">
                <div className="w-full aspect-square relative overflow-hidden">
                  <Image
                    src={`/images/result-${index + 1}.jpg`}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-lg">
                  <p className="font-bold text-brand-bone mb-1">{item.title}</p>
                  <p className="text-xs uppercase tracking-widest text-brand-bronze">{item.category}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <p className="text-brand-grey mb-8">Convinced?</p>
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

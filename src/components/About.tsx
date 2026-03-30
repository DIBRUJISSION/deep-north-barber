'use client'

import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="section-container bg-brand-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Erwin Portrait Image */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/erwin Photo.png"
                alt="Erwin - Master Barber at Deep North Barber"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          {/* Content - Right side */}
          <ScrollReveal className="order-1 lg:order-2" delay={100}>
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-brand-bronze rounded-full"></div>
              <span className="text-xs uppercase tracking-widest text-brand-grey">Master Barber</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-bone tracking-tight">
              Meet Ervin
            </h2>

            <p className="text-lg text-brand-grey leading-relaxed mb-6">
              Precision isn't a technique. It's a discipline. For over a decade, Ervin has mastered the craft of barbering—understanding that every head is different, every hairline is unique, and every client deserves thoughtfulness.
            </p>

            <p className="text-lg text-brand-grey leading-relaxed mb-8">
              His approach is simple but uncompromising: listen carefully, analyze the head shape and hair texture, execute with intention, and deliver a cut that looks sharp from day one and maintains its structure for weeks. No shortcuts. No generics. Just clean barbering crafted to who you are.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-brand-bronze rounded-full mt-2.5 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold tracking-wide mb-1">Classic Craft, Modern Execution</h4>
                  <p className="text-brand-grey text-sm">Rooted in traditional barbering with contemporary standards</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-brand-bronze rounded-full mt-2.5 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold tracking-wide mb-1">Calm, Focused Appointments</h4>
                  <p className="text-brand-grey text-sm">No rush. No noise. Time taken to get it right.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-brand-bronze rounded-full mt-2.5 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold tracking-wide mb-1">Premium Without the Ego</h4>
                  <p className="text-brand-grey text-sm">High standards. Humble approach. Results you'll love.</p>
                </div>
              </div>
            </div>

            <a
              href="https://deepnorthbarber.gettimely.com/#home"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-block"
            >
              Book with Ervin
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

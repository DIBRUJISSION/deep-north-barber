'use client'

import { Phone, Clock } from 'lucide-react'

export default function Location() {
  return (
    <section id="location" className="section-container bg-brand-black border-t border-brand-steel-grey">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Map and Address */}
          <div>
            {/* Google Maps Embed */}
            <div className="mb-8 rounded-lg overflow-hidden border-2 border-brand-steel-grey">
              <iframe
                src="https://www.google.com/maps?q=Shop+2%2F860+Pacific+Highway,+Gordon+NSW+2072&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Deep North Barber location"
                className="w-full"
              />
            </div>

            {/* Address block */}
            <div className="border-l-2 border-brand-bronze pl-6">
              <h3 className="font-bold tracking-wide mb-2 text-brand-bone">Deep North Barber</h3>
              <p className="text-brand-grey mb-4">
                Shop 2/860 Pacific Highway
                <br />
                Gordon NSW 2072
                <br />
                Australia
              </p>
              <a
                href="tel:+61401404325"
                className="flex items-center gap-3 text-brand-bronze hover:text-yellow-500 transition-colors font-bold tracking-wide"
              >
                <Phone size={18} />
                0401 404 325
              </a>
            </div>
          </div>

          {/* Right: Hours and Info */}
          <div>
            {/* Hours */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={24} className="text-brand-bronze" />
                <h3 className="text-2xl font-bold tracking-tight">Hours</h3>
              </div>

              <div className="space-y-3 text-brand-grey">
                <div className="flex justify-between">
                  <span>Monday – Wednesday</span>
                  <span className="font-mono">9:00 – 18:00</span>
                </div>
                <div className="flex justify-between border-b border-brand-steel-grey pb-3 mb-3">
                  <span>Thursday</span>
                  <span className="font-mono font-bold text-brand-bronze">9:00 – 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="font-mono">9:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-mono">9:00 – 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-mono">Closed</span>
                </div>
              </div>
            </div>

            {/* Info box */}
            <div className="bg-brand-charcoal/50 border border-brand-steel-grey p-8 rounded-lg mb-8">
              <h4 className="font-bold tracking-wide mb-4 text-brand-bone">How to Book</h4>
              <p className="text-sm text-brand-grey leading-relaxed mb-6">
                Click below to open our online booking system. Select your preferred date and time, choose your service, and confirm. You'll receive a confirmation SMS.
              </p>
              <a
                href="https://deepnorthbarber.gettimely.com/#home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-brand-bronze text-brand-black px-6 py-2 text-sm font-bold rounded hover:bg-yellow-500 transition-colors inline-block w-full text-center"
              >
                Book Now
              </a>
            </div>

            {/* Local trust line */}
            <div className="pt-8 border-t border-brand-steel-grey">
              <p className="text-sm text-brand-grey">
                <span className="font-bold text-brand-bone">Your local premium barber in Gordon.</span> Serving the North Shore since [year]. Precision cuts, sharp fades, expert beard work. One barber, full attention, real results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

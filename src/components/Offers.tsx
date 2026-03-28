'use client'

export default function Offers() {
  return (
    <section className="section-container bg-brand-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title mb-4">Smart Entry Points</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Premium barbering shouldn't require a leap of faith. Try us at a better price.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Offer 1: First Visit */}
          <div className="border-2 border-brand-bronze bg-gradient-to-br from-brand-charcoal/80 to-brand-black p-10 rounded-lg relative overflow-hidden group hover:border-yellow-500 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-bronze/5 rounded-full -mr-16 -mt-16 group-hover:bg-brand-bronze/10 transition-colors"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4 bg-brand-bronze/20 px-4 py-2 rounded-full">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-bronze">New Client</span>
              </div>

              <h3 className="text-3xl font-bold mb-3 text-brand-bone">40% Off</h3>
              <p className="text-2xl font-bold text-brand-bronze mb-4">First Haircut</p>

              <p className="text-brand-grey mb-6 leading-relaxed">
                Your introduction to precision. We're confident you'll be back. Use code <span className="font-mono font-bold text-brand-bone">FC40</span> at booking.
              </p>

              <div className="flex items-center gap-2 text-sm text-brand-grey mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Valid Mon–Thu only
              </div>

              <a
                href="https://deepnorthbarber.gettimely.com/#home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-block"
              >
                Book First Visit
              </a>
            </div>
          </div>

          {/* Offer 2: Loyalty */}
          <div className="border-2 border-brand-steel-grey bg-gradient-to-br from-brand-charcoal/40 to-brand-black p-10 rounded-lg relative overflow-hidden group hover:border-brand-bronze transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-bronze/5 rounded-full -mr-16 -mt-16 group-hover:bg-brand-bronze/10 transition-colors"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4 bg-brand-steel-grey/40 px-4 py-2 rounded-full">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-grey">Loyalty</span>
              </div>

              <h3 className="text-3xl font-bold mb-3 text-brand-bone">10% Off</h3>
              <p className="text-2xl font-bold text-brand-grey mb-4">Return Visit</p>

              <p className="text-brand-grey mb-6 leading-relaxed">
                Already experienced Deep North? Book within 3 weeks and lock in 10% off your next appointment. Consistency rewarded.
              </p>

              <div className="flex items-center gap-2 text-sm text-brand-grey mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Valid Mon–Thu only
              </div>

              <a
                href="https://deepnorthbarber.gettimely.com/#home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-block"
              >
                Book Next Appointment
              </a>
            </div>
          </div>
        </div>

        {/* Info text */}
        <div className="text-center text-sm text-brand-grey border-t border-brand-steel-grey pt-8">
          <p>Offers apply to all services. Valid Monday through Thursday. Combine with booking code when applicable.</p>
        </div>
      </div>
    </section>
  )
}

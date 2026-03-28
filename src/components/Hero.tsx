'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-brand-charcoal to-brand-black flex items-center justify-center pt-20 md:pt-0">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-bronze rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-steel-grey rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-32 text-center">
        {/* Trust line above headline */}
        <div className="mb-8 inline-flex items-center gap-3 bg-brand-charcoal/80 px-6 py-2 rounded-full border border-brand-steel-grey">
          <div className="w-2 h-2 bg-brand-bronze rounded-full"></div>
          <span className="text-xs uppercase tracking-widest text-brand-grey">Premium Barbering in Gordon</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Precision That Speaks
          <span className="block text-brand-bronze">Before You Do</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-brand-grey leading-relaxed max-w-3xl mx-auto mb-12">
          Sharp fades. Clean standards. Expert beard work. Every haircut tailored to your head shape, hair texture, and lifestyle. This isn't just a cut—it's a standard.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="https://deepnorthbarber.gettimely.com/#home"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="btn-outline"
          >
            View Services
          </a>
        </div>

        {/* Trust indicators under CTA */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-brand-grey">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-brand-bronze rounded-full"></div>
            <span>Boutique barbering by Ervin</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-brand-steel-grey rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-brand-bronze rounded-full"></div>
            <span>Located in Gordon, North Shore</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-brand-steel-grey rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-brand-bronze rounded-full"></div>
            <span>Easy online booking</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-brand-grey">SCROLL</span>
          <svg className="w-5 h-5 text-brand-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

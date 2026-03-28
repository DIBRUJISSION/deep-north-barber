'use client'

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-brand-charcoal to-brand-black border-t border-brand-steel-grey overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-bronze rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-brand-bone tracking-tight">
          Your Next Cut Should Set the Standard
        </h2>

        <p className="text-lg md:text-xl text-brand-grey leading-relaxed mb-12 max-w-2xl mx-auto">
          Not all haircuts are created equal. Book an appointment at Deep North Barber and experience the difference precision and care make.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://deepnorthbarber.gettimely.com/#home"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium"
          >
            Book Sharp. Leave Sharper.
          </a>
          <a
            href="tel:+61401404325"
            className="btn-outline"
          >
            Call 0401 404 325
          </a>
        </div>

        {/* Social proof line */}
        <div className="mt-16 pt-12 border-t border-brand-steel-grey text-sm text-brand-grey">
          <p>Boutique barbering in Gordon, North Shore, Sydney. Premium precision. No compromises.</p>
        </div>
      </div>
    </section>
  )
}

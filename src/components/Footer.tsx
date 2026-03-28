'use client'

import Link from 'next/link'
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-charcoal/80 border-t border-brand-steel-grey">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4 text-brand-bone">
              DEEP NORTH
              <span className="block text-xs tracking-widest text-brand-grey mt-1">BARBER</span>
            </h3>
            <p className="text-sm text-brand-grey leading-relaxed mb-6">
              Premium men's barbering in Gordon. Precision cuts, sharp fades, expert beard work.
            </p>
            <p className="text-xs uppercase tracking-widest text-brand-steel-grey">Crafted by Ervin</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold tracking-wide text-brand-bone mb-6 text-sm">Navigation</h4>
            <ul className="space-y-3 text-sm text-brand-grey">
              <li>
                <a href="#services" className="hover:text-brand-bronze transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-bronze transition-colors">
                  About Ervin
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-bronze transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-brand-bronze transition-colors">
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold tracking-wide text-brand-bone mb-6 text-sm">Contact</h4>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+61401404325"
                className="flex items-center gap-2 text-brand-grey hover:text-brand-bronze transition-colors"
              >
                <Phone size={16} />
                0401 404 325
              </a>
              <div className="flex items-start gap-2 text-brand-grey">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>Shop 2/860 Pacific Hwy</p>
                  <p>Gordon NSW 2072</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold tracking-wide text-brand-bone mb-6 text-sm">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-charcoal border border-brand-steel-grey flex items-center justify-center text-brand-grey hover:text-brand-bronze hover:border-brand-bronze transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-charcoal border border-brand-steel-grey flex items-center justify-center text-brand-grey hover:text-brand-bronze hover:border-brand-bronze transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-steel-grey py-8">
          {/* Bottom bar with booking CTA */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <p className="text-xs uppercase tracking-widest text-brand-steel-grey">
              © {currentYear} Deep North Barber. All rights reserved.
            </p>
            <a
              href="https://deepnorthbarber.gettimely.com/#home"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-brand-bronze text-brand-black px-6 py-2 text-xs font-bold rounded uppercase tracking-wide hover:bg-yellow-500 transition-colors"
            >
              Still Haven't Booked?
            </a>
          </div>

          {/* Bottom info */}
          <p className="text-xs text-brand-steel-grey text-center">
            Deep North Barber. Precision cuts, sharp fades, and expert beard work for men who value standards. Located in Gordon, North Shore, Sydney.
          </p>
        </div>
      </div>
    </footer>
  )
}

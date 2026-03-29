'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur-md border-b border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {/* Logo Image */}
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.jpg"
                alt="Deep North Barber Logo"
                width={50}
                height={50}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            {/* Brand Text */}
            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-tight text-brand-bone">DEEP NORTH</div>
              <div className="text-xs tracking-widest text-brand-grey">BARBER</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm tracking-wide hover:text-brand-bronze transition-colors">Services</Link>
            <Link href="#about" className="text-sm tracking-wide hover:text-brand-bronze transition-colors">About</Link>
            <Link href="#gallery" className="text-sm tracking-wide hover:text-brand-bronze transition-colors">Gallery</Link>
            <Link href="#location" className="text-sm tracking-wide hover:text-brand-bronze transition-colors">Location</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+61401404325"
              className="flex items-center gap-2 text-sm tracking-wide hover:text-brand-bronze transition-colors"
            >
              <Phone size={16} />
              0401 404 325
            </a>
            <a
              href="https://deepnorthbarber.gettimely.com/#home"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:text-brand-bronze transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-brand-charcoal pt-4">
            <Link href="#services" className="text-sm tracking-wide hover:text-brand-bronze transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#about" className="text-sm tracking-wide hover:text-brand-bronze transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#gallery" className="text-sm tracking-wide hover:text-brand-bronze transition-colors" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="#location" className="text-sm tracking-wide hover:text-brand-bronze transition-colors" onClick={() => setIsOpen(false)}>Location</Link>
            <div className="flex flex-col gap-3 pt-2 border-t border-brand-charcoal mt-2">
              <a
                href="tel:+61401404325"
                className="flex items-center gap-2 text-sm tracking-wide hover:text-brand-bronze transition-colors"
              >
                <Phone size={16} />
                0401 404 325
              </a>
              <a
                href="https://deepnorthbarber.gettimely.com/#home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium text-center"
              >
                Book Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

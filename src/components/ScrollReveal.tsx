'use client'

import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-12')
          }, delay)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-12 transition-all duration-900 ease-out ${className}`}
    >
      {children}
    </div>
  )
}

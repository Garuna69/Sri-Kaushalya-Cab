"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-navy-light/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#home" aria-label="Sri Kaushalya Cab - Home">
            <Logo variant="full" className="[&_span]:text-navy-foreground [&_span:last-child]:text-gold" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-navy-foreground/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919036947611"
              className="flex items-center gap-2 text-sm font-medium text-gold"
            >
              <Phone className="h-4 w-4" />
              +91 90369 47611
            </a>
            <Button
              asChild
              className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-lg font-semibold"
            >
              <a href="#booking">Book Now</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center rounded-md p-2 text-navy-foreground lg:hidden"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-navy-light/30 bg-navy lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-navy-foreground/80 transition-colors hover:bg-navy-light/30 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <hr className="my-2 border-navy-light/30" />
            <a
              href="tel:+919036947611"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gold"
            >
              <Phone className="h-4 w-4" />
              +91 90369 47611
            </a>
            <Button
              asChild
              className="mt-1 bg-gold text-gold-foreground hover:bg-gold/90 rounded-lg font-semibold"
            >
              <a href="#booking" onClick={() => setMobileOpen(false)}>
                Book Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

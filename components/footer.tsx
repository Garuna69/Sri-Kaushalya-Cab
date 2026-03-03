import { Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "Book a Ride", href: "#booking" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  { label: "Local City Rides", href: "#services" },
  { label: "Airport Transfers", href: "#services" },
  { label: "Outstation Trips", href: "#services" },
  { label: "Corporate Travel", href: "#services" },
  { label: "Group Travel", href: "#services" },
]

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="full" className="[&_span]:text-navy-foreground [&_span:last-child]:text-gold" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/60">
              Your trusted taxi service partner in Bangalore. Reliable rides for every occasion, at
              prices you will love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-foreground/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-foreground/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact Info
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex gap-2.5 text-sm text-navy-foreground/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Shop No 2, No 8, GBH Layout, Tatanagar, Devinagar, Bengaluru 560092
              </li>
              <li>
                <a
                  href="tel:+919036947611"
                  className="flex items-center gap-2.5 text-sm text-navy-foreground/60 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  +91 90369 47611
                </a>
              </li>
              <li>
                <a
                  href="mailto:kousalyatravels@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-navy-foreground/60 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 text-gold" />
                  kousalyatravels@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-navy-foreground/40">
            &copy; 2026 Sri Kaushalya Cab. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-navy-foreground/40 transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-navy-foreground/40 transition-colors hover:text-gold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

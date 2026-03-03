import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Bangalore cityscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-20 lg:px-8 lg:pt-32 lg:pb-28">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-gold uppercase">
              Trusted Taxi Service in Bangalore
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight text-navy-foreground font-serif md:text-5xl lg:text-6xl">
            Reliable &amp; Comfortable Taxi Service in Bangalore
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-navy-foreground/70">
            City Rides | Airport Transfers | Outstation Trips | Corporate Travel
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-lg text-base font-semibold px-8 h-12"
            >
              <a href="#booking" className="flex items-center gap-2">
                Book Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-lg border-navy-foreground/30 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground text-base font-semibold px-8 h-12"
            >
              <a href="tel:+919036947611" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-8 lg:gap-12">
            {[
              { value: "10K+", label: "Happy Customers" },
              { value: "50+", label: "Expert Drivers" },
              { value: "24/7", label: "Available" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-gold font-serif md:text-3xl">
                  {stat.value}
                </span>
                <span className="text-sm text-navy-foreground/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

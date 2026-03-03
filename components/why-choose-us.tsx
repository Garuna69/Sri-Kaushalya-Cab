import {
  Clock,
  IndianRupee,
  UserCheck,
  SprayCan,
  Headphones,
  CheckCircle2,
} from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "On-time Service",
    description: "Punctuality is our promise. We track every ride to ensure timely arrivals.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges. Best rates in Bangalore.",
  },
  {
    icon: UserCheck,
    title: "Professional Drivers",
    description: "Verified, trained, and courteous drivers who know Bangalore inside out.",
  },
  {
    icon: SprayCan,
    title: "Clean & Sanitized Vehicles",
    description: "Every vehicle is sanitized before each trip for your health and comfort.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our support team is always available to assist you, day or night.",
  },
  {
    icon: CheckCircle2,
    title: "Easy Booking",
    description: "Book a cab in minutes via phone call, website, or quick booking form.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-primary py-20 lg:py-28">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-primary-foreground font-serif md:text-4xl">
            The Sri Kaushalya Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-primary-foreground/70 leading-relaxed">
            We go the extra mile to deliver a premium travel experience at affordable prices.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-7 backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
                <reason.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

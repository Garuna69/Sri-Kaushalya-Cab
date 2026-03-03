import {
  MapPin,
  Plane,
  Mountain,
  Briefcase,
  Users,
} from "lucide-react"

const services = [
  {
    icon: MapPin,
    title: "Local City Rides",
    description:
      "Comfortable and affordable rides within Bangalore city. Perfect for daily commutes, shopping trips, and errands.",
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description:
      "Timely airport transfers to and from Kempegowda International Airport. Track your flight and ride with ease.",
  },
  {
    icon: Mountain,
    title: "Outstation Trips",
    description:
      "Explore destinations beyond Bangalore. Mysore, Coorg, Ooty, and more with our reliable outstation cab service.",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description:
      "Tailored corporate travel solutions for businesses. Monthly packages and dedicated fleet for your organization.",
  },
  {
    icon: Users,
    title: "Family & Group Travel",
    description:
      "Spacious vehicles for family outings and group trips. Comfortable seating and ample luggage space for everyone.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Services
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground font-serif md:text-4xl">
            Travel Solutions for Every Need
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            From quick city rides to extended outstation journeys, we offer a comprehensive range of
            taxi services designed around your comfort and convenience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/40 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-5">
                <a
                  href="#booking"
                  className="inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  Book this service
                  <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

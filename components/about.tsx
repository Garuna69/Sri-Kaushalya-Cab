import { Shield, Clock, Users, Award } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Safety First",
    description: "All vehicles are regularly inspected and sanitized for your safety.",
  },
  {
    icon: Clock,
    title: "Always Punctual",
    description: "We value your time. Our drivers arrive promptly, every time.",
  },
  {
    icon: Users,
    title: "Experienced Drivers",
    description: "Professional, verified drivers with years of Bangalore road knowledge.",
  },
  {
    icon: Award,
    title: "Top Rated",
    description: "Consistently rated among the best cab services in Bangalore.",
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground font-serif md:text-4xl">
              Your Trusted Travel Partner in Bangalore
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Sri Kaushalya Cab is a premier taxi service provider based in Bangalore, dedicated to
              offering reliable, punctual, and comfortable transportation solutions. Whether you need a
              quick city ride, airport transfer, outstation trip, or corporate travel arrangement, we
              have you covered.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              With a fleet of well-maintained vehicles and a team of experienced, professional drivers,
              we ensure every journey is safe, comfortable, and on time. Our commitment to customer
              satisfaction has made us the preferred choice for thousands of families and businesses
              across Bangalore.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

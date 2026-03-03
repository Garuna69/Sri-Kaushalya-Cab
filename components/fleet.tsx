import Image from "next/image"
import { Users, Briefcase as Luggage, Fuel } from "lucide-react"
import { Button } from "@/components/ui/button"

const vehicles = [
  {
    name: "Sedan",
    subtitle: "Dzire / Etios",
    image: "/images/sedan.jpg",
    seats: "4 Passengers",
    luggage: "2 Bags",
    type: "Petrol / CNG",
    description:
      "Perfect for daily city rides and airport transfers. Comfortable and fuel-efficient.",
  },
  {
    name: "SUV",
    subtitle: "Innova / Ertiga",
    image: "/images/suv.jpg",
    seats: "6-7 Passengers",
    luggage: "4 Bags",
    type: "Diesel",
    description:
      "Ideal for family trips and group travel. Spacious interior with ample room for luggage.",
  },
  {
    name: "Premium",
    subtitle: "Camry / Accord",
    image: "/images/premium.jpg",
    seats: "4 Passengers",
    luggage: "3 Bags",
    type: "Petrol / Hybrid",
    description:
      "Executive class vehicles for corporate travel and special occasions. Luxury and comfort.",
  },
]

export function Fleet() {
  return (
    <section id="fleet" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Fleet
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground font-serif md:text-4xl">
            Choose Your Ride
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Well-maintained vehicles to suit every budget and occasion. All our cars are regularly
            serviced and thoroughly sanitized.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} - ${vehicle.subtitle}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-xl font-bold text-card-foreground">{vehicle.name}</h3>
                  <span className="text-sm text-muted-foreground">{vehicle.subtitle}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {vehicle.description}
                </p>

                {/* Specs */}
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5 text-accent" />
                    {vehicle.seats}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Luggage className="h-3.5 w-3.5 text-accent" />
                    {vehicle.luggage}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Fuel className="h-3.5 w-3.5 text-accent" />
                    {vehicle.type}
                  </div>
                </div>

                <Button
                  asChild
                  className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold"
                >
                  <a href="#booking">Book {vehicle.name}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { CalendarDays, MapPin, User, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "919036947611"

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const pickup = formData.get("pickup") as string
    const drop = formData.get("drop") as string
    const date = formData.get("date") as string

    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Not specified"

    const message = [
      `*New Booking Request - Sri Kaushalya Cab*`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Pickup:* ${pickup}`,
      `*Drop:* ${drop}`,
      `*Travel Date:* ${formattedDate}`,
      ``,
      `Please confirm my booking. Thank you!`,
    ].join("\n")

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    setSubmitted(true)

    // Small delay so the user sees the confirmation before redirect
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer")
      setTimeout(() => setSubmitted(false), 4000)
    }, 600)
  }

  return (
    <section id="booking" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left copy */}
          <div className="lg:sticky lg:top-28">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Book Your Ride
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground font-serif md:text-4xl">
              Reserve Your Cab in Minutes
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Fill out the form and our team will confirm your booking within minutes. You can also
              call us directly for instant bookings.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Call for Instant Booking</p>
                  <a
                    href="tel:+919036947611"
                    className="text-sm text-accent font-medium hover:underline"
                  >
                    +91 90369 47611
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <CalendarDays className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Available 24/7</p>
                  <p className="text-sm text-muted-foreground">
                    Airport pickups, late night rides &amp; early morning trips
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <MessageCircle className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-card-foreground">
                  Redirecting to WhatsApp...
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your booking details are being sent via WhatsApp. If the page
                  doesn{"'"}t open automatically,{" "}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-green-600 underline"
                  >
                    click here
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-lg font-bold text-card-foreground">Fill Your Details</h3>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>

                {/* Pickup */}
                <div>
                  <label htmlFor="pickup" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="pickup"
                      name="pickup"
                      type="text"
                      required
                      placeholder="Enter pickup Location"
                      className="h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>

                {/* Drop */}
                <div>
                  <label htmlFor="drop" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Drop Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="drop"
                      name="drop"
                      type="text"
                      required
                      placeholder="Enter drop Location"
                      className="h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Travel Date
                  </label>
                  <div className="relative">
                    <CalendarDays className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className="h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="mt-2 h-12 w-full bg-green-600 text-white hover:bg-green-700 rounded-lg text-base font-semibold gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book via WhatsApp
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Office",
    value: "Shop No 2, No 8, GBH Layout, Tatanagar, Devinagar, Bengaluru, Karnataka 560092, India",
    href: "https://maps.google.com/?q=Shop+No+2+No+8+GBH+Layout+Tatanagar+Devinagar+Bengaluru+Karnataka+560092",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90369 47611",
    href: "tel:+919036947611",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kousalyatravels@gmail.com",
    href: "mailto:kousalyatravels@gmail.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "24 Hours, 7 Days a Week",
    href: undefined,
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contact Us
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground font-serif md:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Have questions or need assistance? We are here to help. Reach out to us through any of
            the channels below.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                  <info.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-card-foreground">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-1 block text-sm leading-relaxed text-muted-foreground hover:text-accent transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              title="Sri Kaushalya Cab Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2!2d77.58!3d13.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzIuMyJOIDc3wrAzNCc0OC4wIkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

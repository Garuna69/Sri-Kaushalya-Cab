import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Fleet } from "@/components/fleet"
import { WhyChooseUs } from "@/components/why-choose-us"
import { BookingForm } from "@/components/booking-form"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  )
}

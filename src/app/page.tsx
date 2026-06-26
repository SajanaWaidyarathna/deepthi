import { ShuffleHero } from "@/components/ui/shuffle-grid";
import ServicesPage from "./services/page";
import ContactPage from "./contact/page";
// import FleetPage from "./fleet/page";  (if you have one)


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">


      {/* HOME */}
      <section
        id="home"
        className="scroll-mt-24"
      >
        <ShuffleHero />
      </section>




      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-24"
      >
        <ServicesPage />
      </section>





      {/* FLEET */}
      {/* 
      <section
        id="fleet"
        className="scroll-mt-24"
      >
        <FleetPage />
      </section>
      */}





      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24"
      >
        <ContactPage />
      </section>


    </main>
  );
}
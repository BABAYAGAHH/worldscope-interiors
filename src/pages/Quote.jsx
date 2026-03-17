import {
  CalendarRange,
  LayoutGrid,
  MapPin,
  Wallet,
} from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import HeroSection from "../components/HeroSection";
import QuoteForm from "../components/QuoteForm";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { siteConfig } from "../data/site";

const quoteBenefits = [
  {
    title: "Clear Scope",
    description: "Share your exact service category and property type so we can tailor the response.",
    icon: LayoutGrid,
  },
  {
    title: "Location Planning",
    description: "Your location helps us estimate logistics and scheduling more accurately.",
    icon: MapPin,
  },
  {
    title: "Preferred Date",
    description: "Add a target service date to make planning and follow-up faster.",
    icon: CalendarRange,
  },
  {
    title: "Budget Direction",
    description: "A budget range helps us recommend the best value package or project path.",
    icon: Wallet,
  },
];

function Quote() {
  return (
    <>
      <Seo title="Quote Request | Worldscope Interiors" />

      <HeroSection
        eyebrow="Quote Request / Booking"
        title="Start your booking with a few practical details."
        description="Use this form to request a quote for interior decoration, cleaning services, or a combined service package."
        primaryAction={{
          label: "Chat on WhatsApp",
          href: siteConfig.whatsappLink,
          external: true,
        }}
        secondaryAction={{ label: "Contact Page", to: "/contact" }}
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Worldscope Interiors quote request preview"
        supportingImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
        supportingAlt="Cleaning and decor consultation"
        compact
      />

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Booking Form"
          title="A conversion-focused quote flow built around WhatsApp follow-up."
          description="Once submitted, the details are prepared and redirected to WhatsApp so the conversation can continue quickly."
        />
        <div className="mt-10">
          <QuoteForm />
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="What To Include"
          title="The more context you share, the better we can shape the quote."
          description="These details help us respond with the right scope, timing, and service recommendation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quoteBenefits.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Quote;

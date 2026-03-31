import {
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
} from "lucide-react";
import CTASection from "../components/CTASection";
import ContactForm from "../components/ContactForm";
import FAQAccordion from "../components/FAQAccordion";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { faqs } from "../data/faq";
import { siteConfig } from "../data/site";

const contactBlocks = [
  {
    title: "Phone",
    value: siteConfig.phoneDisplay,
    description: "Call for direct service inquiries and fast clarifications.",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: siteConfig.phoneDisplay,
    description: "Best channel for quick quotes, booking, and follow-up.",
    icon: MessageCircleMore,
  },
  {
    title: "Email",
    value: siteConfig.emailPlaceholder,
    description: "Official business email can be updated later.",
    icon: Mail,
  },
  {
    title: "Address",
    value: siteConfig.addressPlaceholder,
    description: "Visit or reference the studio location in Port Harcourt.",
    icon: MapPin,
  },
];

function Contact() {
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.addressPlaceholder
  )}&output=embed`;

  return (
    <>
      <Seo title="Contact | Worldscope Interiors" />

      <HeroSection
        eyebrow="Contact Worldscope Interiors"
        title="We’re ready to help you transform your space or schedule a professional cleaning service."
        description="Reach out for interior decoration, cleaning services, combined packages, or custom requests."
        primaryAction={{ label: "Send a Message", href: "#contact-form" }}
        secondaryAction={{
          label: "Chat on WhatsApp",
          href: siteConfig.whatsappLink,
          external: true,
        }}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Worldscope Interiors contact preview"
        supportingImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
        supportingAlt="Cleaning consultation"
        compact
      />

      <section className="section-shell pt-0">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactBlocks.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="section-panel p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[1.55rem] font-semibold leading-none text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold text-primary">{item.value}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="space-y-8">
            <div className="section-panel p-8">
              <SectionHeader
                eyebrow="Studio Location"
                title="Find us in Port Harcourt."
                description="The map below uses the provided business address and can be fine-tuned later if needed."
              />
              <div className="mt-8 overflow-hidden rounded-[28px] border border-primary/10 bg-white/70 shadow-soft">
                <iframe
                  title="Worldscope Interiors location"
                  src={mapEmbed}
                  className="min-h-[320px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Common Questions"
                title="A few quick answers before you book."
                description="If you still need help after this, WhatsApp is the fastest way to reach us."
              />
              <div className="mt-8">
                <FAQAccordion items={faqs.slice(0, 4)} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer to start with a quote instead of a general inquiry?"
        description="Tell us your service category, property type, location, and preferred date and we’ll follow up quickly."
        primaryAction={{ label: "Request a Quote", to: "/quote" }}
        secondaryAction={{
          label: "Chat on WhatsApp",
          href: siteConfig.whatsappLink,
          external: true,
        }}
      />
    </>
  );
}

export default Contact;

import {
  BadgeCheck,
  Building2,
  ClipboardList,
  Clock3,
  Coins,
  Handshake,
  House,
  MessageCircleMore,
  Paintbrush2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import FAQAccordion from "../components/FAQAccordion";
import FeatureCard from "../components/FeatureCard";
import GalleryGrid from "../components/GalleryGrid";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import { faqs } from "../data/faq";
import { galleryItems } from "../data/gallery";
import {
  homeHighlights,
  homeStats,
  processSteps,
  serviceOverview,
  whyChooseUs,
} from "../data/services";
import { siteConfig } from "../data/site";
import { testimonials } from "../data/testimonials";

const highlightIcons = [Paintbrush2, Sparkles, PhoneCall, ShieldCheck];
const serviceIcons = [House, Sparkles];
const featureIcons = [Users, BadgeCheck, Clock3, Coins, ShieldCheck, Sparkles];
const processIcons = [MessageCircleMore, ClipboardList, Sparkles, Handshake];
const processDescriptions = [
  "We listen to your needs, space goals, and service preferences before recommending the right next step.",
  "We inspect the space, align on scope, and map out the best design or cleaning approach.",
  "Our team carries out the approved work with care, professionalism, and attention to detail.",
  "We confirm the result, share next steps, and remain available for continued support.",
];

function Home() {
  return (
    <>
      <Seo title="Home | Worldscope Interiors" />

      <HeroSection
        eyebrow="Interior Decoration & Cleaning Services"
        title="Transforming Spaces. Delivering Clean Comfort."
        description="Worldscope Interiors provides premium interior decoration and professional cleaning services for homes, offices, and commercial spaces."
        primaryAction={{ label: "Get a Quote", to: "/quote" }}
        secondaryAction={{
          label: "Chat on WhatsApp",
          href: siteConfig.whatsappLink,
          external: true,
        }}
        highlights={[
          "Elegant interiors shaped around your taste and purpose",
          "Residential and commercial cleaning with flexible scheduling",
        ]}
        stats={homeStats}
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Premium living room interior"
        supportingImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
        supportingAlt="Professional cleaning service"
      />

      <section className="section-shell pt-0">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homeHighlights.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={highlightIcons[index]}
              title={item.title}
              description={item.description}
              kicker="Trust Highlight"
            />
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Services Overview"
          title="Two premium service categories under one dependable brand."
          description="Worldscope Interiors is your trusted partner for premium interior decoration and dependable cleaning services. We help homes, offices, and business spaces look better, feel better, and function better."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {serviceOverview.map((service, index) => (
            <ServiceCard
              key={service.slug}
              icon={serviceIcons[index]}
              title={service.title}
              description={service.description}
              to={`/${service.slug}`}
              cta="Learn More"
            />
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Professional execution, premium standards, and customer-first service."
          description="We combine design sense, practical service delivery, and a strong commitment to customer satisfaction. Whether you need a refreshed interior or a professionally cleaned environment, Worldscope Interiors delivers with care and consistency."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <FeatureCard
              key={item}
              icon={featureIcons[index]}
              title={item}
              description="Reliable service delivery designed to make your experience smooth, efficient, and worth recommending."
            />
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Featured Portfolio"
            title="Selected spaces and service results that reflect our standards."
            description="Explore living room decor, office styling, deep cleaning, and commercial service highlights."
          />
          <Link to="/gallery" className="secondary-button shrink-0">
            View Full Gallery
          </Link>
        </div>
        <div className="mt-10">
          <GalleryGrid items={galleryItems} showFilters={false} limit={6} />
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Our Process"
          title="A simple, clear path from first conversation to final delivery."
          description="We keep every project organized, collaborative, and focused on a smooth client experience."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = processIcons[index];

            return (
              <div key={step} className="section-panel p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-4xl font-semibold text-primary/15">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900">{step}</h3>
                <p className="mt-3 text-sm text-slate-600">{processDescriptions[index]}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Testimonials"
          title="Clients remember the finish, the care, and the communication."
          description="Placeholder reviews are included for now and can be replaced with real client feedback later."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.quote} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Helpful answers before you book."
              description="Here are a few of the most common questions clients ask before requesting service."
            />
            <div className="mt-8">
              <FAQAccordion items={faqs.slice(0, 4)} />
            </div>
          </div>

          <div className="section-panel p-8">
            <span className="eyebrow">Need Fast Help?</span>
            <h3 className="mt-6 text-4xl font-semibold text-slate-900">
              Talk to us directly on WhatsApp.
            </h3>
            <p className="mt-4 text-slate-600">
              Share your service type, location, and preferred date, and we will guide you toward the right package.
            </p>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="primary-button mt-8"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to upgrade your space or schedule a cleaning service?"
        description="Let’s turn your space into something more stylish, more comfortable, and easier to maintain."
        primaryAction={{ label: "Request a Quote", to: "/quote" }}
        secondaryAction={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}

export default Home;

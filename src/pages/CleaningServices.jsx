import {
  Building2,
  CalendarRange,
  ClipboardList,
  Clock3,
  Droplets,
  FileCheck,
  Hammer,
  House,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import CTASection from "../components/CTASection";
import FeatureCard from "../components/FeatureCard";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import ServiceCard from "../components/ServiceCard";
import {
  cleaningBenefits,
  cleaningPackages,
  cleaningProcess,
  cleaningServices,
} from "../data/services";
import { siteConfig } from "../data/site";

const cleaningIcons = [
  House,
  Building2,
  Sparkles,
  Hammer,
  Truck,
  CalendarRange,
  FileCheck,
  Leaf,
];
const benefitIcons = [Leaf, Clock3, ShieldCheck, CalendarRange];
const processIcons = [ClipboardList, CalendarRange, Droplets, ShieldCheck];

function CleaningServices() {
  return (
    <>
      <Seo title="Cleaning Services | Worldscope Interiors" />

      <HeroSection
        eyebrow="Professional Cleaning Services"
        title="Reliable cleaning solutions for homes, offices, and commercial spaces."
        description="Our cleaning team provides reliable, detail-focused cleaning services that leave your environment fresh, organized, and professionally maintained."
        primaryAction={{ label: "Schedule Cleaning", to: "/quote" }}
        secondaryAction={{
          label: "Chat on WhatsApp",
          href: siteConfig.whatsappLink,
          external: true,
        }}
        highlights={[
          "One-time, deep, post-construction, and routine cleaning support",
          "Flexible scheduling for residential and commercial environments",
        ]}
        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Professional cleaning service"
        supportingImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
        supportingAlt="Commercial cleaning"
        compact
      />

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Cleaning Categories"
          title="Flexible cleaning packages for homes, offices, and commercial property."
          description="We tailor service scope and scheduling around the way your environment is used."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cleaningServices.map((service, index) => (
            <ServiceCard
              key={service}
              icon={cleaningIcons[index]}
              title={service}
              description="Dependable execution with a focus on hygiene, presentation, and convenience."
            />
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Benefits"
          title="Cleaning support that improves appearance, comfort, and day-to-day efficiency."
          description="Our process is designed to save time while delivering a healthier and more polished environment."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cleaningBenefits.map((benefit, index) => (
            <FeatureCard
              key={benefit}
              icon={benefitIcons[index]}
              title={benefit}
              description="Professional execution with service flexibility for both small and large environments."
            />
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Cleaning Process"
          title="A clear service flow that keeps booking simple and quality consistent."
          description="From inquiry to quality check, we keep the process efficient and easy to follow."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cleaningProcess.map((step, index) => {
            const Icon = processIcons[index];

            return (
              <div key={step} className="section-panel p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{step}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Sample Packages"
          title="Choose a starting point, then let us tailor the final scope."
          description="These packages help clients frame the conversation before a custom quote is prepared."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cleaningPackages.map((item, index) => (
            <div key={item.title} className="section-panel p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Package 0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Need a cleaner, fresher, professionally maintained environment?"
        description="Tell us the property type, location, and schedule that works for you, and we’ll help you lock in the right service plan."
        primaryAction={{ label: "Schedule Cleaning", to: "/quote" }}
        secondaryAction={{
          label: "Chat on WhatsApp",
          href: siteConfig.whatsappLink,
          external: true,
        }}
      />
    </>
  );
}

export default CleaningServices;

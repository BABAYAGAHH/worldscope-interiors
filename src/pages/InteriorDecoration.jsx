import {
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  House,
  LayoutGrid,
  Paintbrush2,
  Palette,
  Ruler,
  Sparkles,
} from "lucide-react";
import CTASection from "../components/CTASection";
import FeatureCard from "../components/FeatureCard";
import GalleryGrid from "../components/GalleryGrid";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import ServiceCard from "../components/ServiceCard";
import { galleryItems } from "../data/gallery";
import {
  interiorBenefits,
  interiorProcess,
  interiorServices,
} from "../data/services";
import { siteConfig } from "../data/site";

const serviceIcons = [
  House,
  Sparkles,
  BriefcaseBusiness,
  Ruler,
  LayoutGrid,
  Palette,
  Paintbrush2,
  Building2,
];
const benefitIcons = [Sparkles, LayoutGrid, Paintbrush2, Building2];

function InteriorDecoration() {
  const interiorGallery = galleryItems.filter(
    (item) => item.category === "Interior Decoration"
  );

  return (
    <>
      <Seo title="Interior Decoration Services | Worldscope Interiors" />

      <HeroSection
        eyebrow="Interior Decoration Services"
        title="Beautiful, functional spaces designed to reflect your style and purpose."
        description="From stylish room transformations to functional office enhancements, our interior decoration service is designed to bring elegance, comfort, and personality into every space."
        primaryAction={{ label: "Book Interior Consultation", to: "/quote" }}
        secondaryAction={{ label: "Request Quote", to: "/contact" }}
        highlights={[
          "Personalized design direction for homes and business spaces",
          "Premium styling choices matched to budget, purpose, and atmosphere",
        ]}
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Elegant interior decoration"
        supportingImage="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        supportingAlt="Styled living room"
        compact
      />

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Service List"
          title="Interior styling services shaped around comfort, function, and visual impact."
          description="We work across homes, offices, and commercial spaces to create rooms that look polished and feel intentional."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {interiorServices.map((service, index) => (
            <ServiceCard
              key={service}
              icon={serviceIcons[index]}
              title={service}
              description="Tailored support delivered with a premium finish standard and clear creative direction."
            />
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="How It Works"
          title="A guided process that keeps your interior project organized and refined."
          description="We move from creative direction to execution with clarity at every stage."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {interiorProcess.map((step, index) => (
            <div key={step} className="section-panel p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Step 0{index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Why Choose Our Decor Service"
          title="Design decisions that feel premium without losing practicality."
          description="Our interior decoration work balances aesthetics, usability, and personal expression."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {interiorBenefits.map((benefit, index) => (
            <FeatureCard
              key={benefit}
              icon={benefitIcons[index]}
              title={benefit}
              description="Every recommendation is shaped to suit the space, the user, and the desired finish."
            />
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Interior Gallery"
            title="Preview some of the looks and atmospheres we can help create."
            description="These sample portfolio entries highlight residential and commercial styling direction."
          />
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="secondary-button shrink-0"
          >
            Chat on WhatsApp
          </a>
        </div>
        <div className="mt-10">
          <GalleryGrid items={interiorGallery} showFilters={false} limit={4} />
        </div>
      </section>

      <CTASection
        title="Ready to plan your interior transformation?"
        description="Let’s discuss the style, function, and feel you want your space to deliver."
        primaryAction={{ label: "Book Interior Consultation", to: "/quote" }}
        secondaryAction={{ label: "Request Quote", to: "/contact" }}
      />
    </>
  );
}

export default InteriorDecoration;

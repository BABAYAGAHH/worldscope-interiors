import {
  BadgeCheck,
  Eye,
  Gem,
  Handshake,
  MapPin,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import CTASection from "../components/CTASection";
import FeatureCard from "../components/FeatureCard";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { aboutValues, trustReasons } from "../data/services";
import { siteConfig } from "../data/site";

const valueIcons = [ShieldCheck, Gem, Sparkles, BadgeCheck, Handshake];
const trustIcons = [Target, Sparkles, MessageCircleMore, Eye];

function About() {
  return (
    <>
      <Seo title="About | Worldscope Interiors" />

      <HeroSection
        eyebrow="About Worldscope Interiors"
        title="A service-focused brand built around beauty, comfort, and care."
        description="Worldscope Interiors is a service-focused brand dedicated to creating beautiful interiors and maintaining clean, healthy environments. We combine style, comfort, and functionality through our interior decoration services, while also delivering dependable cleaning solutions for homes, offices, and commercial spaces."
        primaryAction={{ label: "Get in Touch", to: "/contact" }}
        secondaryAction={{
          label: "Chat on WhatsApp",
          href: siteConfig.whatsappLink,
          external: true,
        }}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Elegant office interior"
        supportingImage="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80"
        supportingAlt="Styled reception area"
        compact
      />

      <section className="section-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-panel p-8 lg:p-10">
            <span className="eyebrow">Our Point Of View</span>
            <h2 className="mt-6 text-5xl font-semibold leading-[0.95] text-slate-900">
              Style should feel resolved, and service should feel dependable.
            </h2>
            <p className="mt-6 text-base text-slate-600 sm:text-lg">
              Our work is guided by thoughtful design, reliable execution, and a clear desire to leave every environment looking better and feeling better than before. We believe well-considered interiors and well-maintained spaces shape how people live, work, and welcome others.
            </p>
          </div>

          <div className="editorial-note flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-primary">
                Studio Base
              </p>
              <div className="mt-5 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-none text-primary" />
                <p className="text-sm leading-7 text-slate-600">{siteConfig.addressPlaceholder}</p>
              </div>
            </div>
            <div className="mt-8 fine-rule" />
            <p className="mt-8 text-sm leading-7 text-slate-600">
              The result we aim for is calm, composed, and highly usable: spaces that communicate quality without noise.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Purpose"
          title="Style and service working together under one trusted business."
          description="We hold the same premium standard whether the work is decorative, operational, residential, or commercial."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="section-panel p-8 lg:p-10">
            <span className="eyebrow">Mission</span>
            <h3 className="mt-6 text-4xl font-semibold text-slate-900">
              To enhance spaces through thoughtful design and reliable cleaning services.
            </h3>
            <p className="mt-4 text-slate-600">
              We improve comfort, appearance, and functionality with practical service that still feels refined.
            </p>
          </div>
          <div className="section-panel p-8 lg:p-10">
            <span className="eyebrow">Vision</span>
            <h3 className="mt-6 text-4xl font-semibold text-slate-900">
              To become a trusted name in interior transformation and cleaning excellence.
            </h3>
            <p className="mt-4 text-slate-600">
              We aim to be known for consistency, professionalism, and premium finishes across every service category.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Core Values"
          title="The standards behind every project and every client interaction."
          description="Professionalism, quality, and customer satisfaction stay at the center of how we deliver."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {aboutValues.map((value, index) => (
            <FeatureCard
              key={value}
              icon={valueIcons[index]}
              title={value}
              description="Applied through clear communication, careful workmanship, and dependable follow-through."
            />
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Why Clients Trust Us"
          title="A polished result matters, but so does the way we get there."
          description="We focus on personalized service, close attention to detail, and premium standards from beginning to end."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustReasons.map((reason, index) => (
            <FeatureCard
              key={reason}
              icon={trustIcons[index]}
              title={reason}
              description="Every project is delivered with a service mindset that values clarity, care, and confidence."
            />
          ))}
        </div>
      </section>

      <CTASection
        title="Let’s talk about your space and what success should look like."
        description="If you need a refined interior, dependable cleaning support, or both, we are ready to help you plan the next step."
        primaryAction={{ label: "Get in Touch", to: "/contact" }}
        secondaryAction={{ label: "Request a Quote", to: "/quote" }}
      />
    </>
  );
}

export default About;

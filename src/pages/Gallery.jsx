import { ImageIcon } from "lucide-react";
import CTASection from "../components/CTASection";
import GalleryGrid from "../components/GalleryGrid";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { galleryCategories, galleryItems } from "../data/gallery";

function Gallery() {
  return (
    <>
      <Seo title="Gallery | Worldscope Interiors" />

      <HeroSection
        eyebrow="Gallery / Portfolio"
        title="Selected interior and cleaning projects that reflect our service standard."
        description="Browse a mix of interior decoration, cleaning services, residential work, commercial work, and before-and-after transformations."
        primaryAction={{ label: "Request a Quote", to: "/quote" }}
        secondaryAction={{ label: "Contact Us", to: "/contact" }}
        image="https://images.pexels.com/photos/7546321/pexels-photo-7546321.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="Professional living room interior portfolio preview"
        supportingImage="https://images.pexels.com/photos/6195278/pexels-photo-6195278.jpeg?auto=compress&cs=tinysrgb&w=900"
        supportingAlt="Professional cleaning team portfolio preview"
        compact
      />

      <section className="section-shell pt-0">
        <SectionHeader
          eyebrow="Portfolio Filter"
          title="Explore projects by service category and space type."
          description="Use the filters below to focus on the type of transformation or cleaning result you want to see."
          align="center"
        />
        <div className="mt-10">
          <GalleryGrid
            items={galleryItems}
            categories={galleryCategories}
            showFilters
          />
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="section-panel flex flex-col gap-5 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Project Preview</span>
            <h3 className="mt-5 text-4xl font-semibold text-slate-900">
              Need a similar result for your own space?
            </h3>
            <p className="mt-4 text-slate-600">
              We can shape a custom interior or cleaning package around your property type, timeline, and budget.
            </p>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
            <ImageIcon className="h-7 w-7" />
          </div>
        </div>
      </section>

      <CTASection
        title="Seen something close to the result you want?"
        description="Let’s discuss your own project and map out the next step toward a polished space."
        primaryAction={{ label: "Request a Quote", to: "/quote" }}
        secondaryAction={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}

export default Gallery;

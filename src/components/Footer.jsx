import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks, siteConfig } from "../data/site";
import BrandLogo from "./BrandLogo";

const serviceLinks = [
  { label: "Interior Decoration", to: "/interior-decoration" },
  { label: "Cleaning Services", to: "/cleaning-services" },
  { label: "Gallery / Portfolio", to: "/gallery" },
  { label: "Quote Request", to: "/quote" },
];

const socialLinks = [
  { label: "Instagram", icon: Instagram, hrefKey: "instagramLink" },
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
];

function Footer() {
  return (
    <footer className="section-shell pb-10 pt-8">
      <div className="section-panel overflow-hidden px-6 py-10 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.75fr_0.75fr_1fr]">
          <div>
            <BrandLogo />
            <h3 className="mt-6 max-w-md text-4xl font-semibold text-slate-900">
              Interior decoration and cleaning services with a calm premium standard.
            </h3>
            <p className="mt-4 max-w-md text-slate-600">{siteConfig.description}</p>

            <div className="mt-6 editorial-note max-w-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                Studio Address
              </p>
              <p className="mt-3 text-sm font-medium text-slate-700">
                {siteConfig.addressPlaceholder}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, icon: Icon, hrefKey }) => {
                const href = hrefKey ? siteConfig[hrefKey] : null;
                const className =
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white/80 text-slate-500 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/25 hover:text-primary";

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit Worldscope Interiors on ${label}`}
                    className={className}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ) : (
                  <span key={label} aria-label={`${label} coming soon`} className={className}>
                    <Icon className="h-4 w-4" />
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Navigate
            </h4>
            <div className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm font-medium text-slate-600 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Services
            </h4>
            <div className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm font-medium text-slate-600 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Contact
            </h4>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <span>{siteConfig.phoneDisplay}</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircleMore className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <span>{siteConfig.emailPlaceholder}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <span>{siteConfig.addressPlaceholder}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 fine-rule" />
        <div className="mt-6 flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Worldscope Interiors. All rights reserved.</p>
          <p>Website developed by {siteConfig.developer}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


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

const serviceLinks = [
  { label: "Interior Decoration", to: "/interior-decoration" },
  { label: "Cleaning Services", to: "/cleaning-services" },
  { label: "Gallery / Portfolio", to: "/gallery" },
  { label: "Quote Request", to: "/quote" },
];

function Footer() {
  return (
    <footer className="section-shell pb-10 pt-8">
      <div className="section-panel overflow-hidden px-6 py-10 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Worldscope Interiors
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-900">
              Interior decoration and cleaning services with premium care.
            </h3>
            <p className="mt-4 max-w-md text-slate-600">{siteConfig.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <span
                  key={index}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Quick Links</h4>
            <div className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm font-medium text-slate-600 transition hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Services</h4>
            <div className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm font-medium text-slate-600 transition hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Contact</h4>
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

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Worldscope Interiors. All rights reserved.</p>
          <p>Website developed by {siteConfig.developer}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

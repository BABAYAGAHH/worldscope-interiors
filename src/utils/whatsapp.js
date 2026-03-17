import { siteConfig } from "../data/site";

export function buildWhatsAppUrl(message) {
  return `${siteConfig.whatsappLink}?text=${encodeURIComponent(message)}`;
}

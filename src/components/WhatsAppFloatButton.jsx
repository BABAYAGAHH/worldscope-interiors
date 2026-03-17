import { MessageCircleMore } from "lucide-react";
import { siteConfig } from "../data/site";

function WhatsAppFloatButton() {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-panel transition duration-300 hover:-translate-y-1 hover:bg-primary/90"
      aria-label="Chat on WhatsApp"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

export default WhatsAppFloatButton;

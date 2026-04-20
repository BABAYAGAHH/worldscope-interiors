import logoUrl from "../assets/worldscope-interiors-logo.svg";
import { siteConfig } from "../data/site";

function BrandLogo({ className = "", compact = false, showText = true }) {
  const markSize = compact
    ? "h-14 w-14 rounded-[24px] sm:h-16 sm:w-16 sm:rounded-[26px]"
    : "h-20 w-20 rounded-[30px]";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`flex shrink-0 items-center justify-center overflow-hidden border border-primary/10 bg-white shadow-soft ${markSize}`}
      >
        <img
          src={logoUrl}
          alt={`${siteConfig.name} logo`}
          className="h-full w-full object-contain p-1"
        />
      </span>

      {showText ? (
        <span className="min-w-0">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-primary/80">
            Port Harcourt Studio
          </span>
          <span
            className={`block truncate font-semibold tracking-[-0.02em] text-slate-900 ${
              compact ? "text-base sm:text-lg" : "text-xl"
            }`}
          >
            {siteConfig.name}
          </span>
        </span>
      ) : null}
    </div>
  );
}

export default BrandLogo;

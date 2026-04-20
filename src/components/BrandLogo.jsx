import logoUrl from "../assets/worldscope-interiors-logo.svg";
import { siteConfig } from "../data/site";

function BrandLogo({ className = "", compact = false, showText = true }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`flex shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-primary/10 bg-white shadow-soft ${
          compact ? "h-12 w-12" : "h-14 w-14"
        }`}
      >
        <img
          src={logoUrl}
          alt={`${siteConfig.name} logo`}
          className="h-full w-full object-contain p-1.5"
        />
      </span>

      {showText ? (
        <span className="min-w-0">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-primary/80">
            Port Harcourt Studio
          </span>
          <span
            className={`block truncate font-semibold tracking-[-0.02em] text-slate-900 ${
              compact ? "text-base sm:text-lg" : "text-lg"
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

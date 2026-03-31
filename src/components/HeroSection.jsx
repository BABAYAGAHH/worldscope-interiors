import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

function ActionButton({ action, variant = "primary" }) {
  if (!action) {
    return null;
  }

  const className = variant === "primary" ? "primary-button" : "secondary-button";
  const content = (
    <>
      {action.label}
      <ArrowRight className="h-4 w-4" />
    </>
  );

  if (action.to) {
    return (
      <Link to={action.to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  );
}

function HeroSection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  highlights = [],
  stats = [],
  image,
  imageAlt,
  supportingImage,
  supportingAlt,
  compact = false,
}) {
  return (
    <section className="section-shell pt-4 sm:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`section-panel relative overflow-hidden px-6 py-8 sm:px-10 ${
          compact ? "lg:px-12 lg:py-12" : "lg:px-14 lg:py-14"
        }`}
      >
        <div className="absolute inset-0 bg-hero-glow opacity-90" />
        <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid items-start gap-12 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.96fr)] lg:gap-16">
          <div>
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}

            <div className="mt-7 flex gap-6">
              <span className="hidden h-auto w-px bg-primary/14 lg:block" />
              <div>
                <h1
                  className={`max-w-3xl text-balance font-semibold leading-[0.92] text-slate-900 ${
                    compact ? "text-5xl sm:text-6xl" : "text-5xl sm:text-6xl lg:text-7xl"
                  }`}
                >
                  {title}
                </h1>

                <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
                  {description}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton action={primaryAction} variant="primary" />
              <ActionButton action={secondaryAction} variant="secondary" />
            </div>

            {highlights.length ? (
              <div className="mt-10 grid gap-4 lg:max-w-2xl">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className="editorial-note flex items-start gap-4 px-5 py-5 text-sm text-slate-700"
                  >
                    <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                      0{index + 1}
                    </span>
                    <div>
                      <CheckCircle2 className="mb-3 h-5 w-5 text-accent" />
                      <span className="font-medium leading-6">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="glass-panel relative overflow-hidden p-3 sm:p-4"
            >
              <div className="absolute left-6 top-6 z-10 rounded-full border border-white/35 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
                Calm. Disciplined. Premium.
              </div>
              <img
                src={image}
                alt={imageAlt}
                className={`h-[360px] w-full rounded-[26px] object-cover ${
                  compact ? "sm:h-[430px]" : "sm:h-[560px]"
                }`}
              />
              <div className="absolute inset-x-6 bottom-6 rounded-[28px] border border-white/28 bg-[rgba(36,27,22,0.78)] px-5 py-5 text-white backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Worldscope Interiors
                </p>
                <p className="mt-3 text-base font-semibold text-white sm:text-lg">
                  Premium interior decoration and dependable cleaning services under one calm, trusted brand.
                </p>
              </div>
            </motion.div>

            {supportingImage ? (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -bottom-6 -left-4 hidden w-60 rounded-[30px] border border-primary/10 bg-white/90 p-4 shadow-panel md:block"
              >
                <img
                  src={supportingImage}
                  alt={supportingAlt}
                  className="h-40 w-full rounded-[22px] object-cover"
                />
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-900">
                  Beautiful finishes, measured styling, and professional upkeep for homes and businesses.
                </p>
              </motion.div>
            ) : null}
          </div>
        </div>

        {stats.length ? (
          <div className="relative mt-12 border-t border-primary/10 pt-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="stat-tile">
                  <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}

export default HeroSection;


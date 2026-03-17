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
        className={`section-panel relative overflow-hidden px-6 py-10 sm:px-10 ${
          compact ? "lg:px-12 lg:py-14" : "lg:px-14 lg:py-16"
        }`}
      >
        <div className="absolute inset-0 bg-hero-glow opacity-90" />
        <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}

            <h1
              className={`mt-6 max-w-3xl text-balance font-semibold leading-none text-slate-900 ${
                compact ? "text-5xl sm:text-6xl" : "text-5xl sm:text-6xl lg:text-7xl"
              }`}
            >
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton action={primaryAction} variant="primary" />
              <ActionButton action={secondaryAction} variant="secondary" />
            </div>

            {highlights.length ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="glass-panel flex items-center gap-3 px-4 py-4 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-none text-accent" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {stats.length ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/70 bg-white/85 px-5 py-4 shadow-soft"
                  >
                    <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.label}</p>
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
              className="glass-panel relative overflow-hidden p-3"
            >
              <img
                src={image}
                alt={imageAlt}
                className={`h-[360px] w-full rounded-[24px] object-cover ${
                  compact ? "sm:h-[420px]" : "sm:h-[520px]"
                }`}
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[24px] border border-white/60 bg-slate-900/82 px-5 py-4 text-white backdrop-blur">
                <p className="text-sm uppercase tracking-[0.24em] text-accent">
                  Worldscope Interiors
                </p>
                <p className="mt-2 text-base text-slate-100">
                  Premium interior decoration and dependable cleaning services under one brand.
                </p>
              </div>
            </motion.div>

            {supportingImage ? (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -bottom-8 -left-4 hidden w-56 rounded-[28px] border border-white/70 bg-white p-3 shadow-panel md:block"
              >
                <img
                  src={supportingImage}
                  alt={supportingAlt}
                  className="h-40 w-full rounded-[20px] object-cover"
                />
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  Beautiful finishes and professional upkeep for homes and businesses.
                </p>
              </motion.div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;

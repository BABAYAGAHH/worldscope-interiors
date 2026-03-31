import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTAAction({ action, className }) {
  if (!action) {
    return null;
  }

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

function CTASection({ title, description, primaryAction, secondaryAction }) {
  return (
    <section className="section-shell pt-0">
      <div className="relative overflow-hidden rounded-[38px] bg-[linear-gradient(135deg,#2f211b_0%,#4a3429_100%)] px-6 py-10 text-white shadow-panel sm:px-10 lg:px-14 lg:py-14">
        <div className="absolute inset-0 bg-hero-glow opacity-30" />
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-primary/35 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow border-white/10 bg-white/10 text-white">
              Ready When You Are
            </span>
            <h2 className="mt-6 text-4xl font-semibold sm:text-5xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAAction
              action={primaryAction}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
            />
            <CTAAction
              action={secondaryAction}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;


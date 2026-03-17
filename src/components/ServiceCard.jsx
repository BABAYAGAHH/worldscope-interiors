import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceCard({ icon: Icon, title, description, details = [], to, cta = "Learn More" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="card-hover section-panel h-full p-7"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>

      {details.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {details.map((item) => (
            <span key={item} className="muted-chip">
              {item}
            </span>
          ))}
        </div>
      ) : null}

      {to ? (
        <Link
          to={to}
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </motion.div>
  );
}

export default ServiceCard;

import { motion } from "framer-motion";

function FeatureCard({ icon: Icon, title, description, kicker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="glass-panel h-full p-6"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      {kicker ? (
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          {kicker}
        </p>
      ) : null}
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
    </motion.div>
  );
}

export default FeatureCard;

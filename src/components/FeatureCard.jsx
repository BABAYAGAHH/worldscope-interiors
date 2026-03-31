import { motion } from "framer-motion";

function FeatureCard({ icon: Icon, title, description, kicker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="glass-panel h-full p-7"
    >
      <div className="fine-rule" />
      <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-[22px] bg-accent/20 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      {kicker ? (
        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
          {kicker}
        </p>
      ) : null}
      <h3 className="mt-3 text-[1.55rem] font-semibold leading-none text-slate-900">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </motion.div>
  );
}

export default FeatureCard;

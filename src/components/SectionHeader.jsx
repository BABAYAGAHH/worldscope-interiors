import { motion } from "framer-motion";

function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className={alignment}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title mt-5 font-semibold text-slate-900">{title}</h2>
      {description ? (
        <p className="mt-4 text-base text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeader;

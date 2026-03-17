import { motion } from "framer-motion";
import { Quote } from "lucide-react";

function TestimonialCard({ quote, name }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="section-panel h-full p-7"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Quote className="h-5 w-5" />
      </div>
      <p className="mt-6 text-lg text-slate-700">“{quote}”</p>
      <div className="mt-8 border-t border-slate-100 pt-5">
        <p className="font-semibold text-slate-900">{name}</p>
        <p className="text-sm text-slate-500">Satisfied Client</p>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;

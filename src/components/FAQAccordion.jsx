import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function FAQAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = activeIndex === index;

        return (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="section-panel overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold text-slate-900">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 flex-none text-primary transition ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-slate-600">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;

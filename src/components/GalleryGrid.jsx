import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

function GalleryGrid({ items, categories = [], showFilters = true, limit }) {
  const initialFilter = showFilters ? categories[0] ?? "All" : "All";
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [activeItemId, setActiveItemId] = useState(null);

  const visibleItems =
    showFilters && activeFilter !== "All"
      ? items.filter((item) => item.tags.includes(activeFilter))
      : items;
  const filteredItems = typeof limit === "number" ? visibleItems.slice(0, limit) : visibleItems;
  const activeIndex = filteredItems.findIndex((item) => item.id === activeItemId);
  const activeItem = activeIndex >= 0 ? filteredItems[activeIndex] : null;

  useEffect(() => {
    if (activeItemId && !filteredItems.some((item) => item.id === activeItemId)) {
      setActiveItemId(null);
    }
  }, [activeItemId, filteredItems]);

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeItem]);

  const showPrevious = () => {
    if (!filteredItems.length) {
      return;
    }

    const nextIndex = activeIndex <= 0 ? filteredItems.length - 1 : activeIndex - 1;
    setActiveItemId(filteredItems[nextIndex].id);
  };

  const showNext = () => {
    if (!filteredItems.length) {
      return;
    }

    const nextIndex = activeIndex === filteredItems.length - 1 ? 0 : activeIndex + 1;
    setActiveItemId(filteredItems[nextIndex].id);
  };

  return (
    <>
      {showFilters ? (
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === category
                  ? "bg-primary text-white shadow-soft"
                  : "border border-primary/15 bg-white text-slate-700 hover:border-primary/35 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.03 }}
            onClick={() => setActiveItemId(item.id)}
            className="group section-panel overflow-hidden p-0 text-left"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.alt ?? item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {item.category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.subtitle}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 p-4 backdrop-blur-md"
            onClick={() => setActiveItemId(null)}
          >
            <div className="mx-auto flex h-full max-w-5xl items-center justify-center">
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.alt ?? activeItem.title}
                  className="max-h-[75vh] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent px-6 pb-6 pt-24 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    {activeItem.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold">{activeItem.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{activeItem.subtitle}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveItemId(null)}
                  className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                  aria-label="Close image"
                >
                  <X className="h-5 w-5" />
                </button>

                {filteredItems.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={showPrevious}
                      className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                ) : null}
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default GalleryGrid;

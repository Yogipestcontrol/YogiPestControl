"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({
  items,
  allowMultiple = false,
}: {
  items: AccordionItem[];
  allowMultiple?: boolean;
}) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndexes.has(i);
        return (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-border bg-surface transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="pr-4 text-base font-semibold text-foreground">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0"
              >
                <ChevronDown className="h-5 w-5 text-muted" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

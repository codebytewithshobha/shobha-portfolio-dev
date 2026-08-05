import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="mx-auto size-14 rounded-full [background:conic-gradient(from_0deg,var(--glow),transparent_60%,var(--glow-2))] p-[3px]"
            >
              <span className="block size-full rounded-full bg-background" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-5 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              Shobha Kumari
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

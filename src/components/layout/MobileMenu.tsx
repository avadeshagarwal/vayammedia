"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

const overlayVariants = {
  closed: { clipPath: "inset(0 0 100% 0)" },
  open: { clipPath: "inset(0 0 0 0)" },
};

const linkVariants = {
  closed: { opacity: 0, y: 40 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="menu-overlay"
          className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-5 pb-16 pt-24 md:hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
          transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
        >
          <nav className="flex flex-col gap-2">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                variants={linkVariants}
                initial="closed"
                animate="open"
                custom={i}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-display block border-b border-white/10 py-4 text-4xl text-paper transition-colors duration-300 hover:text-magenta"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-12"
          >
            <p className="text-eyebrow text-paper/50">Get in touch</p>
            <a
              href="mailto:hello@vayammedia.com"
              className="mt-2 block text-lg text-paper/80 transition-colors hover:text-magenta"
            >
              hello@vayammedia.com
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

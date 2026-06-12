import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}

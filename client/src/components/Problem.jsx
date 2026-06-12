import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const painPoints = [
  "Don't know what content works",
  "Competitors grow faster",
  "Posting without a strategy",
  "Wasting time guessing"
];

export default function Problem() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-accent-teal">
            The Strategy Gap
          </p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Most Teams Are Creating Content With Missing Context
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Most content teams spend hours watching profiles, saving screenshots, and still end
            up with vague ideas. Content Buddy gives you the pattern behind the performance.
          </p>
        </motion.div>

        <motion.div
          className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 shadow-soft sm:p-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div className="grid gap-4">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
                <p className="font-bold text-slate-100">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-teal-200/30 bg-teal-300/10 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
            <p className="font-black text-white">Content Buddy reveals the blueprint instantly</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

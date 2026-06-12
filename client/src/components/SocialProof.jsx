import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, Timer } from "lucide-react";

const metrics = [
{
icon: BarChart3,
value: "Winning",
label: "Content Patterns"
},
{
icon: Timer,
value: "Faster",
label: "Creator Research"
},
{
icon: BrainCircuit,
value: "Actionable",
label: "Growth Insights"
}
];


export default function SocialProof() {
  return (
    <section id="proof" className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-600">
  Why Content Buddy
</p>
           <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
  Turn creator research into content decisions.
</h2>
          </div>
         <p className="max-w-xl text-sm font-semibold leading-6 text-slate-500">
  Understand what drives growth, discover winning patterns, and build content with more confidence.
</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;

          return (
            <motion.div
              key={metric.label}
              className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 text-left shadow-crisp"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-brand-600">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-5 text-3xl font-black text-slate-950">{metric.value}</p>
              <p className="mt-2 text-sm font-bold text-slate-600">{metric.label}</p>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}

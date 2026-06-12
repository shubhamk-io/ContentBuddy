import { motion } from "framer-motion";
import { ChartNoAxesCombined, Fingerprint, Rocket, WandSparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Fingerprint,
    title: "Reverse Engineer Any Creator",
    description:
      "Drop in a profile link and decode what they post, how often they publish, and what makes their audience respond."
  },
  {
    icon: WandSparkles,
    title: "AI-Powered Growth Insights",
    description:
      "Turn scattered profile signals into clear recommendations for hooks, formats, angles, and content pillars."
  },
  {
    icon: ChartNoAxesCombined,
    title: "Discover Viral Content Patterns",
    description:
      "Spot the recurring themes, structures, and engagement moves behind the posts that outperform the rest."
  },
  {
    icon: Rocket,
    title: "Build Better Content Faster",
    description:
      "Move from research to execution with a blueprint your team can use for planning, scripting, and publishing."
  }
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-[#F6F9FC] px-5 py-20 sm:px-6 lg:px-8">
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-teal-200/35 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="AI Content Intelligence"
          title="A Better Workflow For Creator Research"
          description="Content Buddy gives you the clarity of a strategist, the speed of automation, and the structure your next content sprint needs."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-crisp transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition duration-300 group-hover:bg-brand-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-slate-950">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

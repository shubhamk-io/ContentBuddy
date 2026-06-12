import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    quote:
      "Content Buddy feels like having a strategist who has already watched every creator in our niche.",
    name: "Maya Shah",
    role: "Founder, LaunchLab Media"
  },
  {
    quote:
      "The blueprint format would save our team hours every week. It makes content research feel precise.",
    name: "Daniel Brooks",
    role: "Growth Lead, Studio North"
  },
  {
    quote:
      "I can see exactly why certain posts win and turn that insight into a stronger content calendar.",
    name: "Ari Chen",
    role: "Creator & Newsletter Operator"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F6F9FC] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Early Signals"
          title="For Teams That Treat Content Like A Growth Channel"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-crisp"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-brand-600">
                5/5 Rating
              </div>
              <p className="text-lg font-bold leading-8 text-slate-900">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-blue-100 pt-5">
                <p className="font-black text-slate-950">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

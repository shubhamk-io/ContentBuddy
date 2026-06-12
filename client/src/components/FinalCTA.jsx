import { ArrowRight } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-center shadow-soft sm:p-10 lg:p-14">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 via-accent-violet to-accent-teal" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />
        <h2 className="relative text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready To Unlock Creator Growth Secrets?
        </h2>
        <p className="relative mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Join early and be first in line when Content Buddy opens access.
        </p>
        <div className="relative mx-auto mt-8 max-w-xl">
          <WaitlistForm compact />
        </div>
        <a href="#waitlist" className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-extrabold text-slate-950 shadow-glow transition hover:-translate-y-0.5">
          Join The Waitlist
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

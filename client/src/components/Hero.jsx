import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import Logo from "./Logo";
import ProductPreview from "./ProductPreview";
import WaitlistForm from "./WaitlistForm";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Hero() {

const [users, setUsers] = useState([]);
const [count, setCount] = useState(0);


useEffect(() => {
  const loadUsers = async () => {
    try {
      const { data } = await api.get("/api/waitlist/users");

      setUsers(data.users || []);
      setCount(data.count || 0);
    } catch (error) {
      console.error("Failed to load waitlist users:", error);
    }
  };

  loadUsers();
}, []);


const getAvatarColor = (name = "") => {
  const colors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-indigo-500 to-blue-500",
    "from-emerald-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-violet-500 to-purple-500"
  ];

  return colors[name.length % colors.length];
};

  return (
    <section id="top" className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#eef6ff_100%)]" />
      <div className="absolute right-0 top-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-brand-300/18 blur-3xl" />
      <div className="absolute -left-48 bottom-12 -z-10 h-[28rem] w-[28rem] rounded-full bg-indigo-200/35 blur-3xl" />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-extrabold text-slate-600 md:flex">
          <a className="transition hover:text-brand-600" href="#features">
            Features
          </a>
          <a className="transition hover:text-brand-600" href="#proof">
            Results
          </a>
        </nav>
        <a href="#waitlist" className="hidden sm:inline-flex blue-button px-4 py-2 text-sm">
          Join The Waitlist
          <ArrowRight className="h-4 w-4" />
        </a>
      </header>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-24 lg:pt-16">
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-brand-300/30 bg-white/80 px-4 py-2 text-sm font-bold text-brand-600 shadow-soft lg:mx-0">
            <BadgeCheck className="h-4 w-4" />
            Limited Early Access &bull; Free For Early Users
          </div>

          <h1 className="text-4xl font-black leading-[1.04] tracking-tight text-slate-950 sm:text-5xl md:text-6xl xl:text-7xl">
            Paste Any Creator&apos;s Link.
            <span className="block blue-gradient-text">Get Their Growth Blueprint In Seconds.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl lg:mx-0">
            Analyze YouTube, Instagram, LinkedIn, X, or any creator profile and instantly uncover
            their content strategy, posting patterns, viral hooks, engagement tactics, and growth
            playbook.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a href="#waitlist" className="blue-button w-full sm:w-auto">
              Join The Waitlist
              <ArrowRight className="h-5 w-5" />
            </a>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
              <Sparkles className="h-4 w-4 text-brand-500" />
              Built for creators, founders, and content teams
            </div>
          </div>

{/*  */}

<motion.div
  className="mt-8 flex justify-center lg:justify-start"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.35 }}
>
  <div className="group relative overflow-hidden rounded-3xl border border-blue-100/70 bg-white/80 px-6 py-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">

    {/* Glow */}
    <div className="absolute -top-10 right-0 h-24 w-24 rounded-full bg-blue-200/30 blur-3xl" />

    <div className="relative flex items-center gap-5">

      {/* Avatars */}
     <div className="flex -space-x-4">
  {users.slice(0, 5).map((user) => (
    <div
      key={user._id}
      title={user.name}
      className={`flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br ${getAvatarColor(
        user.name
      )} text-lg font-black text-white shadow-lg transition-all duration-300 hover:scale-110`}
    >
      {user.name?.charAt(0)?.toUpperCase()}
    </div>
  ))}

  {count > 5 && (
    <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-sm font-black text-white shadow-lg">
      +{count - 5}
    </div>
  )}
</div>

      {/* Content */}
      <div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
            <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
          </div>

          <span className="text-sm font-bold text-emerald-600">
            Live Waitlist
          </span>
        </div>

        <p className="mt-1 text-lg font-black text-slate-950">
          {count}+ creators joined
        </p>

        <p className="text-sm text-slate-500">
          Founders, creators & marketers are joining daily
        </p>
      </div>
    </div>
  </div>
</motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        >
          <ProductPreview />
        </motion.div>
      </div>

      <div id="waitlist" className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 rounded-[1.5rem] border border-blue-100 bg-white p-4 shadow-soft sm:p-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="px-2 text-center lg:text-left">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-600">
              Join the beta
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
              Get early access before public launch.
            </h2>
          </div>
          <WaitlistForm compact />
        </div>
      </div>
    </section>
  );
}

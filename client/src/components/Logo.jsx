export default function Logo() {
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label="Content Buddy home">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-300 via-brand-500 to-brand-600 shadow-glow">
        <span className="text-lg font-black tracking-tight text-white">CB</span>
      </span>
      <span className="text-xl font-black tracking-tight text-slate-950">
        Content <span className="blue-gradient-text">Buddy</span>
      </span>
    </a>
  );
}

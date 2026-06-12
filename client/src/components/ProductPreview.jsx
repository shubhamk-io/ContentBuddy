import { BarChart3, Clock3, Link2, MessageSquareText, Sparkles, TrendingUp } from "lucide-react";

const signals = [
  { label: "Hook strength", value: "92", width: "92%" },
  { label: "Posting rhythm", value: "4.8x", width: "78%" },
  { label: "Engagement intent", value: "High", width: "86%" }
];

const patterns = ["Story-led opens", "Specific audience promise", "Contrarian angle"];

export default function ProductPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-300/22 via-sky-200/20 to-indigo-200/30 blur-3xl" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-300" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-brand-600 shadow-sm">
            Blueprint ready
          </span>
        </div>

        <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-slate-100 p-5 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-950 p-4 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500">
                <Link2 className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-black">Analyzing creator</p>
                <p className="truncate text-xs text-slate-300">linkedin.com/in/top-creator</p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {signals.map((signal) => (
                <div key={signal.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-600">{signal.label}</span>
                    <span className="font-black text-slate-950">{signal.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-300"
                      style={{ width: signal.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-600">
                  Growth Blueprint
                </p>
                <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-950">
                  What makes this creator win
                </h3>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-brand-600 sm:flex">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <TrendingUp className="h-5 w-5 text-brand-600" />
                <p className="mt-3 text-xl font-black text-slate-950">38%</p>
                <p className="text-xs font-bold text-slate-500">Higher saves</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <Clock3 className="h-5 w-5 text-brand-600" />
                <p className="mt-3 text-xl font-black text-slate-950">7 PM</p>
                <p className="text-xs font-bold text-slate-500">Peak window</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <BarChart3 className="h-5 w-5 text-brand-600" />
                <p className="mt-3 text-xl font-black text-slate-950">12</p>
                <p className="text-xs font-bold text-slate-500">Top patterns</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-black text-slate-950">
                <MessageSquareText className="h-4 w-4 text-brand-600" />
                Viral hook patterns
              </div>
              <div className="flex flex-wrap gap-2">
                {patterns.map((pattern) => (
                  <span
                    key={pattern}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-extrabold text-brand-600"
                  >
                    {pattern}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

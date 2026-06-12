import { ArrowRight, Loader2 } from "lucide-react";
import { useWaitlistForm } from "../hooks/useWaitlistForm";

export default function WaitlistForm({ compact = false }) {
  const { form, errors, isLoading, handleChange, handleSubmit } = useWaitlistForm();

  return (
    <form
      onSubmit={handleSubmit}
      className={`glass-panel mx-auto w-full max-w-xl rounded-2xl p-5 sm:p-6 ${
        compact ? "" : "shadow-glow"
      }`}
      noValidate
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-left">
          <span className="text-sm font-bold text-slate-800">Full Name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            autoComplete="name"
            className="h-12 rounded-lg border border-blue-100 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:ring-4 focus:ring-brand-500/15"
          />
          {errors.name && <span className="text-sm text-red-300">{errors.name}</span>}
        </label>

        <label className="grid gap-2 text-left">
          <span className="text-sm font-bold text-slate-800">Email Address</span>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            type="email"
            autoComplete="email"
            className="h-12 rounded-lg border border-blue-100 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:ring-4 focus:ring-brand-500/15"
          />
          {errors.email && <span className="text-sm text-red-300">{errors.email}</span>}
        </label>

        <button type="submit" className="blue-button h-12 w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Joining...
            </>
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

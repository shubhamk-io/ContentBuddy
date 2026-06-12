import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <Logo />
        <p className="text-sm font-medium text-slate-500">
          &copy; {new Date().getFullYear()} Content Buddy. Creator growth intelligence for modern teams.
        </p>
      </div>
    </footer>
  );
}

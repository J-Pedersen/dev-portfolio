const Footer = () => (
  <footer
    className="
      border-t mt-8 
      border-slate-300 text-slate-600 bg-slate-100
      dark:border-slate-800 dark:text-slate-400 dark:bg-slate-750
    "
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-4 
                    flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
      <span className="text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Jeff Pedersen
      </span>

      <span className="text-slate-500 dark:text-slate-500">
        Built with React & Tailwind · Portfolio
      </span>
    </div>
  </footer>
);

export default Footer;
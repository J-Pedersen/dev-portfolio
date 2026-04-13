const Footer = () => (
  <footer
    className="
      border-t mt-8 
    bg-slate-100/80 
    text-slate-900
    dark:text-slate-100
      transition-colors
    border-brand-soft 
    bg-slate-100 
    dark:bg-slate-900/60 
    dark:border-brand-soft
    shadow: 0 -6px 20px rgba(15,23,42,0.25)
    dark:shadow: 0 -8px 24px rgba(0,0,0,0.85)" 
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-4 
                    flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
      <span className="text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Jeff Pedersen
      </span>

      <span className="text-slate-500 dark:text-slate-500">
        Built with React & Tailwind
      </span>
    </div>
  </footer>
);

export default Footer;
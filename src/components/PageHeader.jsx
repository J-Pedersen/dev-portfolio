const PageHeader = ({ title, kicker, children }) => (
  <header className="mb-8">
    {kicker && (
      <p className="text-xs uppercase tracking-[0.2em] text-brand mb-2">
        {kicker}
      </p>
    )}

    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
      {title}
    </h1>

    {children && (
      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-2xl">
        {children}
      </p>
    )}
  </header>
);

export default PageHeader;
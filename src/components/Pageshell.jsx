const PageShell = ({ children, variant = "default" }) => {
  const backgrounds = {
    default: "bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_30%)]",
    projects: "bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_30%)]",
    caseStudies: "bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.10),transparent_30%)]",
    gallery: "bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08),transparent_30%)]",
  };

  return (
    <div className={`relative min-h-full overflow-hidden rounded-3xl ${backgrounds[variant] ?? backgrounds.default}`}>
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.035] dark:opacity-[0.06]
          bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          bg-[size:32px_32px]
          text-slate-900 dark:text-white
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageShell;
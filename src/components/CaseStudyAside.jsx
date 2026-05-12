import { Layers, Tag, CircuitBoard } from "lucide-react";
import TagPill from "./TagPill.jsx";

const CaseStudyAside = ({
  techStack = [],
  tags = [],
  links = [],
  architecture,
  media = [],
}) => {
  return (
    <aside
      className="
        p-5 rounded-2xl text-xs flex flex-col items-center space-y-6
        border border-slate-300 bg-gradient-to-b from-white to-slate-100
        dark:border-slate-800 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950
        shadow-sidebar dark:shadow-sidebar-dark
        ring-1 ring-indigo-400/10
        animate-fadeInSlow
        sticky top-24
      "
    >
      {techStack.length > 0 && (
        <div className="space-y-2 text-center w-full">
          <div className="flex items-center justify-center gap-1 text-slate-600 dark:text-slate-300">
            <Layers size={14} />
            <h3 className="text-sm font-semibold">Tech Stack</h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {techStack.join(" · ")}
          </p>
        </div>
      )}

      {tags.length > 0 && (
        <>
          <div className="w-10 h-px bg-slate-300/60 dark:bg-slate-700/60" />

          <div className="space-y-2 text-center w-full">
            <div className="flex items-center justify-center gap-1 text-slate-600 dark:text-slate-300">
              <Tag size={14} />
              <h3 className="text-sm font-semibold">Tags</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-1">
              {tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>
          </div>
        </>
      )}

      {links.length > 0 && (
        <>
          <div className="w-10 h-px bg-slate-300/60 dark:bg-slate-700/60" />

          <div className="space-y-2 text-center w-full">
            <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              Links
            </h3>

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block text-brand hover:text-brand-soft transition"
              >
                {link.label} →
              </a>
            ))}

            {media?.some((item) => item.type === "video") && (
              <div className="mt-2 flex justify-center">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  Demo video included in carousel
                </span>
              </div>
            )}
          </div>
        </>
      )}

      {architecture && (
        <>
          <div className="w-10 h-px bg-slate-300/60 dark:bg-slate-700/60" />

          <div className="space-y-2 text-center w-full">
            <div className="flex items-center justify-center gap-1 text-slate-600 dark:text-slate-300">
              <CircuitBoard size={14} />
              <h3 className="text-sm font-semibold">Structure</h3>
            </div>

            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
              {architecture}
            </p>
          </div>
        </>
      )}
    </aside>
  );
};

export default CaseStudyAside;
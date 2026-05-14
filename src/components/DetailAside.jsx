import { Layers, Tag, Link, CircuitBoard } from "lucide-react";
import TagPill from "./TagPill.jsx";

const AsideHeader = ({ icon: Icon, title }) => {
  return (
    <div
      className="
        mx-auto flex w-full items-center justify-center gap-2
        rounded-full px-3 py-1
        text-slate-100
        bg-gradient-to-r from-transparent via-brand to-transparent
        dark:via-brand-soft
      "
    >
      <Icon size={20} />
      <h3 className="text-sm font-semibold">{title}</h3>
    </div>
  );
};

const DetailAside = ({
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
      {/* TAGS */}
      {techStack.length > 0 && (
        <div className="space-y-2 text-center w-full">
          <AsideHeader icon={Tag} title="TAGS" />

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {techStack.join(" · ")}
          </p>
        </div>
      )}

      {/* TECH */}
      {tags.length > 0 && (
        <>
          <div className="w-10 h-px bg-slate-300/60 dark:bg-slate-700/60" />

          <div className="space-y-2 text-center w-full">
            <AsideHeader icon={Layers} title="TECH" />

            <div className="flex flex-wrap justify-center gap-1">
              {tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* LINKS */}
      {links.length > 0 && (
        <>
          <div className="w-10 h-px bg-slate-300/60 dark:bg-slate-700/60" />

          <div className="space-y-2 text-center w-full">
            <AsideHeader icon={Link} title="LINKS" />

            <div className="flex flex-col items-center justify-center gap-1">
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
                <span className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                  Demo video included in carousel
                </span>
              )}
            </div>
          </div>
        </>
      )}

      {/* STRUCTURE */}
      {architecture && (
        <>
          <div className="w-10 h-px bg-slate-300/60 dark:bg-slate-700/60" />

          <div className="space-y-2 text-center w-full">
            <AsideHeader icon={CircuitBoard} title="STRUCTURE" />

            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
              {architecture}
            </p>
          </div>
        </>
      )}
    </aside>
    
  );
};

export default DetailAside;
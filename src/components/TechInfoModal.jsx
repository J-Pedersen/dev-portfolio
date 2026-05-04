import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import TechIcon from "./TechIcon.jsx";
import { projects } from "../data/projects.js";

const TechInfoModal = ({ open, onClose, tech, description, usedIn = [] }) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  const getProjectIcon = (item) => {
    const matchingProject = projects.find((project) => project.slug === item.slug);
    return item.icon || item.projectIcon || matchingProject?.icon || null;
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {/* BACKDROP */}
      <button
        type="button"
        aria-label="Close tech details"
        onClick={handleClose}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="absolute inset-0 w-full h-full bg-slate-950/50 backdrop-blur-sm"
      />

      {/* MODAL */}
      <div
        className="
          relative z-10 w-full max-w-lg rounded-2xl overflow-hidden
          border border-brand-soft
          bg-slate-100 dark:bg-slate-900
          shadow-card dark:shadow-card-dark
        "
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {/* HEADER */}
        <div
          className="
            px-4 py-3
            bg-brand dark:bg-brand-soft
            border-b border-brand-soft
            flex items-start justify-between gap-4
          "
        >
          <div>
            <h3 className="text-lg font-semibold text-slate-100 text-center">
              {tech}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleClose}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="
              absolute top-3 right-3 text-white
              h-8 w-8 rounded-full
              border border-white/20
              bg-white/10
              flex items-center justify-center
              hover:bg-white/20 transition
            "
            aria-label="Close tech details"
          >
            <X size={20} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-4">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            {description || "No description added yet."}
          </p>

          {/* USED IN */}
          <div className="border-t border-brand-soft/40 pt-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Used In
            </h4>

            {usedIn.length > 0 ? (
              <>
                <div
                  className="
                    max-h-64 overflow-y-auto pr-1 space-y-2
                    scrollbar-thin scrollbar-thumb-brand-soft scrollbar-track-transparent
                  "
                >
                  {usedIn.slice(0, 12).map((item) => {
                    const icon = getProjectIcon(item);
                    const project = projects.find((p) => p.slug === item.slug);
                    const techs = project?.cardTech ?? [];

                    return (
                      <a
                        key={`${item.type}-${item.slug}`}
                        href={item.href}
                        onClick={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        className="
                          block rounded-xl p-3
                          border border-brand-soft
                          bg-brand-soft/20
                          transition
                          hover:bg-brand hover:border-brand hover:shadow-card-hover
                          group
                        "
                      >
                        <div className="flex items-center gap-3">
                          {/* LEFT ICON */}
                          <div
                            className="
                              h-10 w-10 shrink-0 flex items-center justify-center
                              rounded-full
                              border border-brand-soft
                              bg-slate-100 dark:bg-slate-900
                              group-hover:bg-white/15
                            "
                          >
                            {icon ? (
                              <TechIcon
                                name={icon}
                                hideLabel
                                showBg={false}
                                interactive={false}
                                className="h-5 w-5 group-hover:scale-110 transition"
                              />
                            ) : (
                              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-white">
                                {item.type?.slice(0, 2).toUpperCase()}
                              </span>
                            )}
                          </div>

                          {/* MIDDLE */}
                          <div className="flex flex-1 items-center justify-between gap-3 min-w-0">
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-white">
                                {item.title}
                              </p>

                              <p className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-white/80">
                                {item.type}
                              </p>
                            </div>

                            {/* TECH ICONS */}
                            <div className="flex items-center gap-2 shrink-0">
                              {techs.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                title={tech}
                                className="inline-flex items-center justify-center"
                              >
                                <TechIcon
                                  tech={tech}
                                  hideLabel
                                  showBg={true}
                                  interactive={false}
                                  className="scale-75 opacity-90 group-hover:opacity-100 transition"
                                />
                              </span>
                              ))}
                            </div>
                          </div>

                          {/* DIVIDER */}
                          <span
                            className="
                              hidden sm:block h-8 w-px shrink-0
                              bg-brand-soft/60
                              group-hover:bg-white/30
                            "
                          />

                          {/* VIEW BUTTON */}
                          <span
                            className="
                              shrink-0 text-xs font-bold px-2 py-1 rounded-full
                              bg-slate-200 text-slate-700
                              dark:bg-slate-700 dark:text-slate-200
                              group-hover:bg-white group-hover:text-brand
                            "
                          >
                            View
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {usedIn.length > 12 && (
                  <p className="mt-2 text-xs text-center text-slate-500 dark:text-slate-400">
                    Showing 12 of {usedIn.length} linked projects.
                  </p>
                )}
              </>
            ) : (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No linked projects found yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default TechInfoModal;
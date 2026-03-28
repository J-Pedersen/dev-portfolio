import { useEffect } from "react";

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
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

      <div
        className="
          relative z-10 w-full max-w-lg rounded-2xl
          border border-brand-soft
          bg-slate-100 dark:bg-slate-900
          shadow-[0_12px_40px_rgba(0,0,0,0.25)]
          p-5
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
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
              {tech}
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {description || "No description added yet."}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="
              inline-flex h-9 w-9 items-center justify-center rounded-full
              border border-slate-300 dark:border-slate-700
              text-slate-700 dark:text-slate-200
              hover:border-brand hover:text-brand
              transition
            "
          >
            ×
          </button>
        </div>

        <div className="border-t border-brand-soft/40 pt-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">
            Used in
          </h4>

          {usedIn.length > 0 ? (
            <ul className="space-y-2">
              {usedIn.map((item) => (
                <li key={`${item.type}-${item.slug}`}>
                  <a
                    href={item.href}
                    className="text-sm text-brand hover:text-brand-soft transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.title}
                  </a>
                  <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
                    {item.type}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-600 dark:text-slate-400">
              No linked projects found yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
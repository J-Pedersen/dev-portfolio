import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

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

        <div className="p-4 space-y-4">
          <div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {description || "No description added yet."}
            </p>
          </div>

          <div className="border-t border-brand-soft/40 pt-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Used In
            </h4>

            {usedIn.length > 0 ? (
              <ul className="space-y-2">
                {usedIn.map((item) => (
                  <li key={`${item.type}-${item.slug}`}>
                    <a
                      href={item.href}
                      className="text-sm text-brand hover:text-brand-soft transition"
                      onClick={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.stopPropagation()}
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
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default TechInfoModal;
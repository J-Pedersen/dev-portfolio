const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-2xl overflow-hidden
        border border-brand-soft
        bg-white dark:bg-slate-900
        transition
        hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
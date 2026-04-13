const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        h-full
        flex flex-col
        rounded-2xl overflow-hidden
        border border-brand-soft
        bg-slate-100 dark:bg-slate-900
        transition
        shadow-card dark:shadow-card-dark hover:shadow-card-hover
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
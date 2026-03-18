const CardHeader = ({ children }) => {
  return (
    <div
      className="
        px-4 py-3
         bg-brand-soft/30
         dark:hover:text-brand-soft-soft
        border-b border-brand-soft
      "
    >
      {children}
    </div>
  );
};

export default CardHeader;
const CardHeader = ({ children }) => {
  return (
    <div
      className="
        px-4 py-3
        bg-gradient-to-r from-brand/10 to-brand/5
        border-b border-brand-soft
      "
    >
      {children}
    </div>
  );
};

export default CardHeader;
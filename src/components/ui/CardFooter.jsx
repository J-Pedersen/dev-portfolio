const CardFooter = ({ children }) => {
  return (
    <div
      className="
        px-4 py-3
        bg-gradient-to-r from-brand/10 to-brand/5
        border-t border-brand-soft
        flex flex-wrap justify-center gap-3
      "
    >
      {children}
    </div>
  );
};

export default CardFooter;
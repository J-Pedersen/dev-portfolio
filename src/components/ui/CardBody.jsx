const CardBody = ({ children }) => {
  return (
    <div className="px-4 py-3 flex-1 bg-slate-100 dark:bg-slate-900">
      {children}
    </div>
  );
};

export default CardBody;
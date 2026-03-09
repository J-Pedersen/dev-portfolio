const Lightbox = ({ item, onClose }) => {
  return (
    <div
      className="
        fixed inset-0 z-50 bg-black/80 backdrop-blur
        flex items-center justify-center p-4
      "
      onClick={onClose}
    >
      <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.src}
          alt={item.title}
          className="w-full rounded-xl shadow-xl"
        />
        <p className="text-center text-slate-200 text-sm mt-3">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default Lightbox;
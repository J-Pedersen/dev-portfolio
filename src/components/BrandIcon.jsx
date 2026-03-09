// src/components/BrandIcon.jsx
const BrandIcon = ({
  name,
  size = 16,
  className = "",
  title,
}) => {
  if (!name) return null;

  const src = `/icons/${name}.svg`; // e.g. github.svg, linkedin.svg

  return (
    <span className="inline-flex items-center justify-center">
      <img
        src={src}
        alt={title || name}
        title={title || name}
        loading="lazy"
        style={{ width: size, height: size }}
        className={`
          inline-block
          object-contain
          ${className}
        `}
      />
    </span>
  );
};

export default BrandIcon;
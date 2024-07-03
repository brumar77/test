import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
};

export const Button = ({
  type,
  title,
  icon,
  variant,
  full,
  onClick,
  className,
  href,
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter  gap-3 rounded-full border my-6 ${variant} ${
        full && "w-full"
      } ${className}`}
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {href ? (
          <a
            href={href}
            target="_blank" // Abre el enlace en una nueva pestaña
            rel="noopener noreferrer" // Se recomienda para seguridad y accesibilidad
          >
            {title}
          </a>
        ) : (
          title
        )}
      </label>
    </button>
  );
};

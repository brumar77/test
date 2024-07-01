import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ type, title, icon, variant, full, onClick, className }: ButtonProps) => {
  return (
    <button
        className={`flexCenter  gap-3 rounded-full border my-6 ${variant} ${full && "w-full"} ${className}` } 
        type={type}
        onClick={onClick}
        >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

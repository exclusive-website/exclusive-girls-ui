import React from "react";

interface ButtonProps {
  text?: string;
  onClick: () => void;
  type: "primary" | "secondary" | "primaryOutline" | "navbar";
  icon?: React.ReactNode;
  hasIcon?: boolean;
  className?: string;
}

const styleTree: Record<ButtonProps["type"], string[]> = {
  primary: [
    "bg-brand",
    "font-bold",
    "text-white",
    "py-2",
    "hover:cursor-pointer",
    "border",
    "border-brand",
  ],
  secondary: [
    "bg-transparent",
    "text-black",
    "py-2",
    "hover:cursor-pointer",
    "border",
    "border-gray-500",
  ],
  primaryOutline: [
    "bg-transparent",
    "text-white",
    "py-2",
    "hover:cursor-pointer",
    "border",
    "border-brand",
  ],
  navbar: [
    "bg-transparent",
    "text-white",
    "py-2",
    "hover:cursor-pointer",
    "border",
    "border-transparent",
  ],
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type,
  icon,
  hasIcon,
  className = "",
}) => {
  const buttonStyle = styleTree[type];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-semibold transition ${buttonStyle.join(
        " "
      )} ${className}`}
    >
      {hasIcon && icon && (
        <span className="w-[24px] h-[24px]">{icon}</span>
      )}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;

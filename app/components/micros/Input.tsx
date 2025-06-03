import React, { useRef } from "react";

interface InputProps {
  title: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  className?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  title,
  value,
  onChange,
  type = "text",
  placeholder,
  iconLeft,
  iconRight,
  hasIconLeft = false,
  hasIconRight = false,
  className = "",
  error,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const borderColor = error ? "border-red-500" : "border-text-light1";
  const focusShadow = error
    ? "focus-within:shadow-[0_0_0_2px_rgba(248,113,113,0.6)]"
    : "focus-within:shadow-md";
  const labelColor = error ? "text-red-500" : "text-gray-500";

  return (
    <div className={`${className}`}>
      <div className={`flex w-full group border ${borderColor} rounded-lg bg-white transition-all duration-200 ${focusShadow}`}>

        {hasIconLeft && (
          <div
            className={`flex items-center justify-center px-3 cursor-pointer border-r-0 ${borderColor} rounded-l-lg`}
            onClick={handleFocus}
          >
            {iconLeft}
          </div>
        )}

        <div className="relative flex-grow">
          <label
            className={`absolute text-[10px] ${labelColor} top-3 left-2 transform -translate-y-1/2 uppercase pointer-events-none`}
            htmlFor={title}
          >
            {title}
          </label>
          <input
            id={title}
            ref={inputRef}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full p-2 pt-4 bg-white text-black focus:outline-none transition-all duration-200
              ${hasIconLeft ? "rounded-l-none" : "rounded-l-lg"}
              ${hasIconRight ? "rounded-r-none" : "rounded-r-lg"}
              ${hasIconLeft ? "border-l-0" : ""} ${
              hasIconRight ? "border-r-0" : ""
            }`}
          />
        </div>

        {hasIconRight && (
          <div
            className={`flex items-center justify-center px-3 cursor-pointer border-l-0 ${borderColor} rounded-r-lg`}
            onClick={handleFocus}
          >
            {iconRight}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;

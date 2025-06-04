import React from "react";
import { FaCheck } from "react-icons/fa";

interface CheckBoxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  labelPosition?: "right" | "bottom"; // New prop
}

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  label,
  checked,
  onChange,
  labelPosition = "right", // Default to right
}) => {
  const isBottom = labelPosition === "bottom";

  return (
    <label
      htmlFor={id}
      className={`
        flex ${isBottom ? "flex-col items-center gap-1" : "flex-row items-center space-x-2"}
        cursor-pointer text-[16px] font-normal text-black
      `}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span
        className={`w-[20px] h-[20px] rounded-full flex items-center justify-center transition-colors ${
          checked ? "bg-black text-white" : "bg-gray-200 text-transparent"
        }`}
      >
        <FaCheck className="text-[10px]" />
      </span>
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;

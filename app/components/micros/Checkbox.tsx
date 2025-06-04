import React from "react";
import { FaCheck } from "react-icons/fa";

interface CheckBoxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ id, label, checked, onChange }) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center space-x-2 cursor-pointer text-[20px] font-medium text-black"
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

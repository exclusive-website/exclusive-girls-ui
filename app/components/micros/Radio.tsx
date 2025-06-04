import React from "react";

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
}) => {
  return (
    <label htmlFor={id} className="inline-flex items-center cursor-pointer space-x-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span
        className={`w-6 h-6 rounded-full flex items-center justify-center border-3 transition-colors duration-200 ${
          checked ? "border-[#ED217E] bg-[#ED217E]" : "border-gray-400 bg-white"
        }`}
      >
        <span
          className={`w-3.5 h-3.5 rounded-full ${
            checked ? "bg-white" : "bg-gray-300"
          }`}
        ></span>
      </span>
      {label && (
        <span className="text-sm text-white font-medium select-none font-parkinsans text-bold font-700 text-[16px] font-normal">
          {label}
        </span>
      )}
    </label>
  );
};

export default RadioButton;

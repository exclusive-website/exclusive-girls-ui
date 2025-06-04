import React, { useState } from "react";

interface ToggleSwitchProps {
  id: string;
  defaultChecked?: boolean;
  onToggle?: (checked: boolean) => void;
  label?: string;
  type: "filter" | "profile";
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  id,
  defaultChecked = false,
  onToggle,
  label,
  type,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onToggle) onToggle(newChecked);
  };

  // Track & Dot styles
  const trackColor = checked
    ? type === "filter"
      ? "bg-[#303030]"
      : "bg-white"
    : type === "filter"
    ? "bg-[#DDDAD7]"
    : "bg-[#6E6E6E]";

  const dotColor = checked
    ? type === "filter"
      ? "bg-[#fff]"
      : "bg-brand"
    : "bg-[#fff]";

  // Label style mapping
  const labelStyle: Record<
    ToggleSwitchProps["type"],
    string
  > = {
    profile: "text-white font-[700] font-parkinsans text-[16px]",
    filter: "text-black font-[400] font-parkinsans text-[16px]",
  };

  return (
    <div className="flex items-center space-x-3">
      <label htmlFor={id} className="relative inline-block w-10 h-6 cursor-pointer">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="sr-only"
        />

        {/* Track */}
        <div className={`block w-full h-full rounded-full transition-colors ${trackColor}`}></div>

        {/* Dot */}
        <div
          className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform transform ${
            checked ? "translate-x-4" : "translate-x-0"
          } ${dotColor}`}
        ></div>
      </label>

      {label && (
        <span
          className={`text-[16px] select-none cursor-default font-parkinsans ${labelStyle[type]}`}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default ToggleSwitch;

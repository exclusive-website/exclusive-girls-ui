import React, { useState } from "react";

interface ToggleSwitchProps {
  id: string;
  defaultChecked?: boolean;
  onToggle?: (checked: boolean) => void;
  label?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  id,
  defaultChecked = false,
  onToggle,
  label,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onToggle) onToggle(newChecked);
  };

  return (
    <div className="flex items-center space-x-3">
      <label htmlFor={id} className="relative inline-block w-14 h-8 cursor-pointer">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="sr-only"
        />
        {/* Track */}
        <div
          className={`block w-full h-full rounded-full transition-colors ${
            checked ? "bg-white" : "bg-[#DDDAD7]"
          }`}
        ></div>

        {/* Dot */}
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform ${
            checked ? "translate-x-6 bg-pink-600" : "translate-x-0 bg-[#262626]"
          }`}
        ></div>
      </label>
      {label && (
        <span className="text-white text-[16px] select-none cursor-default font-parkinsans font-[700]">
          {label}
        </span>
      )}
    </div>
  );
};

export default ToggleSwitch;

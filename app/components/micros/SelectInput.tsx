import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

interface SelectInputProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
  error?: boolean;
  iconLeft?: React.ReactNode;
  hasIconLeft?: boolean;
}


const SelectInput: React.FC<SelectInputProps> = ({
  title,
  value,
  onChange,
  options,
  placeholder,
  className,
  error = false,
  iconLeft,
  hasIconLeft = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || options[0]);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleOptionSelect = (option: string) => {
    setSelectedValue(option);
    onChange(option);
    setIsOpen(false);
  };

  const borderColor = error ? "border-red-500" : "border-gray-300";
  const labelColor = error ? "text-red-500" : "text-gray-500";
  const shadowClass = error
    ? "focus-within:shadow-[0_0_0_2px_rgba(248,113,113,0.6)]"
    : "focus-within:shadow-md";

  const handleFocus = () => {
    selectRef.current?.focus();
  };

  return (
    <div className={`${className}`}>
      <div
        className={`flex w-full group border ${borderColor} rounded-lg bg-white transition-all duration-200 ${shadowClass}`}
      >
        {/* Left Icon */}
        {hasIconLeft && (
          <div
            className={`flex items-center justify-center px-3 cursor-pointer border-r-0 ${borderColor} rounded-l-lg`}
            onClick={handleFocus}
          >
            {iconLeft}
          </div>
        )}

        {/* Select Display */}
        <div className="relative flex-grow">
          <label
            className={`absolute text-[10px] ${labelColor} z-2 top-3 left-2 transform -translate-y-1/2 uppercase pointer-events-none`}
            htmlFor={title}
          >
            {title}
          </label>

          <div
            ref={selectRef}
            id={title}
            className={`w-full p-2 pt-4 pr-4 bg-white ${
              hasIconLeft ? "rounded-l-none" : "rounded-l-lg"
            } rounded-r-lg relative cursor-pointer transition-all duration-200`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center justify-between">
              <span className="mr-2 text-black">
                {selectedValue || placeholder}
              </span>
              <FaChevronDown
                className={`ml-2 text-gray-600 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10 max-h-[200px] overflow-y-auto">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionSelect(option)}
                  >
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectInput;

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface PhoneInputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phoneOptions: { code: string; country: string }[];
  onPhoneCountryChange: (countryCode: string) => void;
  placeholder?: string;
  className?: string;
  error?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  title,
  value,
  onChange,
  phoneOptions,
  onPhoneCountryChange,
  placeholder,
  className,
  error = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(phoneOptions[0]);

  const handleOptionClick = (country: { code: string; country: string }) => {
    setSelectedCountry(country);
    onPhoneCountryChange(country.code);
    setIsOpen(false);
  };

  const borderColor = error ? "border-red-500" : "border-gray-300";
  const shadowClass = error
    ? "focus-within:shadow-[0_0_0_2px_rgba(248,113,113,0.6)]"
    : "focus-within:shadow-md";
  const labelColor = error ? "text-red-500" : "text-gray-500";

  return (
    <div className={`${className}`}>
      <div className={`relative group ${shadowClass}`}>
        <label
          className={`absolute text-[10px] ${labelColor} top-3 z-2 left-2 transform -translate-y-1/2 uppercase pointer-events-none`}
          htmlFor={title}
        >
          {title}
        </label>

        <div className="flex items-center w-full">
          <div
            className={`w-1/3 p-2 pt-4 pr-4 bg-white border-t border-b border-l ${borderColor} rounded-l-lg min-h-[50px] cursor-pointer relative`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center">
              <span className="mr-2 text-black">{selectedCountry.code}</span>
              <FaChevronDown
                className={`ml-auto text-gray-600 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10 max-h-[200px] overflow-y-auto">
                {phoneOptions.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick(option)}
                  >
                    <span className="mr-2">{option.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type="tel"
            value={value}
            onChange={onChange}
            id={title}
            className={`w-2/3 p-2 bg-white border ${borderColor} border-l- rounded-r-lg focus:outline-none min-h-[50px] transition-all duration-200`}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;

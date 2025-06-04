import React, { useState } from "react";

interface DistanceSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const DistanceSlider: React.FC<DistanceSliderProps> = ({
  min = 0,
  max = 200,
  step = 10,
  defaultValue = 50,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setValue(val);
    if (onChange) onChange(val);
  };

  return (
    <div className="w-full px-4">
      <label className="block mb-2 text-lg font-semibold text-black">
        V okolí {value} km
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleInputChange}
        className="w-full h-[2px] bg-transparent appearance-none"
        style={{
          background: `linear-gradient(to right, #ED217E ${(value - min) / (max - min) * 100}%, #e5e5e5 ${(value - min) / (max - min) * 100}%)`,
        }}
      />
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 22px;
          width: 22px;
          border-radius: 9999px;
          background: white;
          border: 2px solid #ED217E;
          cursor: pointer;
          margin-top: 0px;
        }
        input[type='range']::-moz-range-thumb {
          height: 22px;
          width: 22px;
          border-radius: 9999px;
          background: white;
          border: 2px solid #ED217E;
          cursor: pointer;
          margin-top: 0px;
        }
        input[type='range']::-ms-thumb {
          height: 22px;
          width: 22px;
          border-radius: 9999px;
          background: white;
          border: 2px solid #ED217E;
          cursor: pointer;
          margin-top: 0px;
        }
      `}</style>
    </div>
  );
};

export default DistanceSlider;

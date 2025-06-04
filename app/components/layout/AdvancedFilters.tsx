"use client";
import { FC, useState } from "react";
import Button from "../micros/Button";
import { VscSettings } from "react-icons/vsc";
import SelectInput from "../micros/SelectInput";
import DistanceSlider from "../micros/DistanceSlider";
import ToggleSwitch from "../micros/ToggleSwitch";
import CheckBox from "../micros/Checkbox";

interface Props {
  onClose: () => void;
}

const AdvancedFilters: FC<Props> = ({ onClose }) => {
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedPractices, setSelectedPractices] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [other, setOther] = useState<string[]>([]);

  const toggleSelection = (
    value: string,
    isChecked: boolean,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setState((prev) =>
      isChecked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const options = ["WhatsApp", "Telegram", "Viber"];
  const services = ["Pre mužov", "Pre ženy", "Pre páry"];
  const practices = [
    "Praktika 1",
    "Praktika 2",
    "Praktika 3",
    "Praktika 4",
    "Praktika 5",
    "Praktika 6",
  ];
  const languages = ["Slovenčina", "Angličtina", "Nemčina", "Maďarčina"];
  const items = ["Erotická masáž", "Striptíz", "Spoločnosť", "Escort", "Iné"];

  function onResetFilters(): void {
    setSelectedContacts([]);
    setSelectedServices([]);
    setSelectedPractices([]);
    setSelectedLanguages([]);
    setOther([]);
    // Reset other states if needed
    // e.g., reset distance, location, age, availability, etc.
  }

  function onApplyFilters(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div
  className="
    fixed top-0 bottom-0 right-0 z-50
    w-full sm:max-w-md
    bg-white shadow-lg border-l border-gray-200
    overflow-y-auto
    transition-transform duration-300
  "
>

      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <VscSettings color="#ED217E" size={24} />
          <h2 className="text-[17px] font-parkinsans font-bold text-brand">
            Filter dievčat
          </h2>
        </div>
        <Button
          type="navbar"
          text=""
          onClick={onClose}
          hasIcon
          icon={<img src="/icon_times.svg" alt="Close" />}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-8">
        <SelectInput
          value="Neuvedená"
          title="Lokalita"
          options={["Neuvedená", "Bratislava", "Košice", "Prešov", "Nitra"]}
          onChange={() => {}}
          hasIconLeft={true}
          iconLeft={<img src="/icon_user-location.svg" alt="Location" />}
        />

        <DistanceSlider
          title="Vzdialenosť"
          value={50}
          onChange={() => {}}
          min={0}
          max={100}
          step={1}
        />

        <SelectInput
          value="Neuvedené"
          title="Vek"
          options={[
            "18-19 rokov",
            "20-24 rokov",
            "25-29 rokov",
            "30-34 rokov",
            "35-39 rokov",
            "40 rokov a viac",
          ]}
          onChange={() => {}}
          hasIconLeft={false}
        />

        <SelectInput
          value="Neuvedené"
          title="Dostupnosť"
          options={["Dostupná", "Nedostupná"]}
          onChange={() => {}}
          hasIconLeft={false}
        />

        <SelectInput
          value="Neuvedené"
          title="Prsia"
          options={[
            "Veľkosť 1",
            "Veľkosť 2",
            "Veľkosť 3",
            "Veľkosť 4",
            "Veľkosť 5",
            "Veľkosť 6",
            "Veľkosť 7 a viac",
          ]}
          onChange={() => {}}
          hasIconLeft={false}
        />

        <SelectInput
          value="Neuvedené"
          title="Narodnosť"
          options={[
            "Slovenka",
            "Maďarka",
            "Česka",
            "Rakúšanka",
            "Nemecká",
            "Iná",
          ]}
          onChange={() => {}}
          hasIconLeft={false}
        />

        <ToggleSwitch
          label="Tetovanie"
          defaultChecked={false}
          id="toggle-tattoo"
          onToggle={() => {}}
          type="filter"
        />

        {/* Contact Methods */}
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-parkinsans">
            Kontakt cez
          </span>
          <div className="flex items-center justify-center gap-10 mt-4">
            {options.map((option) => (
              <CheckBox
                key={option}
                id={`checkbox-${option}`}
                label={option}
                labelPosition="bottom"
                checked={selectedContacts.includes(option)}
                onChange={(checked) =>
                  toggleSelection(option, checked, setSelectedContacts)
                }
              />
            ))}
          </div>
        </div>

        {/* Služby pre */}
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-parkinsans">
            Služby pre
          </span>
          <div className="flex flex-col items-start gap-4 mt-4 h-24 overflow-y-auto">
            {services.map((service) => (
              <CheckBox
                key={service}
                id={`checkbox-${service}`}
                label={service}
                labelPosition="right"
                checked={selectedServices.includes(service)}
                onChange={(checked) =>
                  toggleSelection(service, checked, setSelectedServices)
                }
              />
            ))}
          </div>
        </div>

        {/* Praktiky */}
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-parkinsans">
            Praktiky
          </span>
          <div className="flex flex-col items-start gap-4 mt-4 h-24 overflow-y-auto">
            {practices.map((practice) => (
              <CheckBox
                key={practice}
                id={`checkbox-${practice}`}
                label={practice}
                labelPosition="right"
                checked={selectedPractices.includes(practice)}
                onChange={(checked) =>
                  toggleSelection(practice, checked, setSelectedPractices)
                }
              />
            ))}
          </div>
        </div>

        {/* Jazyky */}
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-parkinsans">
            Jazyky
          </span>
          <div className="flex flex-col items-start gap-4 mt-4 h-24 overflow-y-auto">
            {languages.map((language) => (
              <CheckBox
                key={language}
                id={`checkbox-${language}`}
                label={language}
                labelPosition="right"
                checked={selectedLanguages.includes(language)}
                onChange={(checked) =>
                  toggleSelection(language, checked, setSelectedLanguages)
                }
              />
            ))}
          </div>
        </div>

        {/* Ďalšie */}
        <div>
          <span className="text-[10px] text-gray-500 uppercase font-parkinsans">
            Ďalšie
          </span>
          <div className="flex flex-col items-start gap-4 mt-4 h-24 overflow-y-auto">
            {items.map((item) => (
              <CheckBox
                key={item}
                id={`checkbox-${item}`}
                label={item}
                labelPosition="right"
                checked={other.includes(item)}
                onChange={(checked) => toggleSelection(item, checked, setOther)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className=" bottom-0 left-0 right-0 flex justify-between items-center gap-x-4 p-4 bg-white shadow-lg border-t border-gray-200">
        <div className="w-full">
          <Button
            type="primary"
            onClick={onApplyFilters}
            text="Použiť filtre"
            className="w-full py-4"
          />
        </div>
        <div className="w-full">
          <Button
            type="secondary"
            onClick={onResetFilters}
            text="Resetovať filtre"
            className="w-full py-4"
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilters;

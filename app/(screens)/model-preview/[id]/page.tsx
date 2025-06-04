"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { mockCards } from "@/app/mockData";
import { CardProps } from "@/app/components/ui/Card";
import PhoneInput from "@/app/components/micros/PhoneInput";
import SelectInput from "@/app/components/micros/SelectInput";
import Input from "@/app/components/micros/Input";
import { FaSearch } from "react-icons/fa";

export default function ModelPreviewPage() {
  const params = useParams();
  const id = params?.id;

  const [model, setModel] = useState<CardProps | null>(null);

  useEffect(() => {
    if (id) {
      const found = mockCards.find((m) => m.id === id);
      setModel(found || null);
    }
  }, [id]);

  const [phoneValue, setPhoneValue] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const phoneOptions = [
    { code: "+421", country: "Slovakia" },
    { code: "+420", country: "Czech Republic" },
    { code: "+1", country: "United States" },
    { code: "+44", country: "United Kingdom" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+34", country: "Spain" },
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(e.target.value);
  };

  const handleCountryCodeChange = (code: string) => {
    setCountryCode(code);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  const [text, setText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="container w-full mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{model?.name}</h1>
      <p>Age: {model?.age}</p>
      <p>Location: {model?.location}</p>
      <div className="my-4">
        <img
          src={model?.image[0]}
          alt={model?.name}
          className="w-full max-w-md rounded-lg"
        />
      </div>
      <p>Weight: {model?.description.weight}kg</p>
      <p>Height: {model?.description.height}cm</p>
      <p>Breast: {model?.description.breast}</p>
      <p>Hair: {model?.description.hair.join(", ")}</p>

      <div className="mt-4">
        <PhoneInput
          title="Phone"
          value={phoneValue}
          onChange={handlePhoneChange}
          phoneOptions={phoneOptions}
          onPhoneCountryChange={handleCountryCodeChange}
          placeholder="+9XX"
        />

        <PhoneInput
          title="Phone"
          value={phoneValue}
          onChange={handlePhoneChange}
          phoneOptions={phoneOptions}
          onPhoneCountryChange={handleCountryCodeChange}
          placeholder="+9XX"
          error={true}
          className="mt-4"
        />

        <SelectInput
          title="Select Option"
          value={selectedOption}
          onChange={handleSelectChange}
          options={["Option 1", "Option 2", "Option 3"]}
          className="mt-4"
        />

        <SelectInput
          title="Select Option"
          value={selectedOption}
          onChange={handleSelectChange}
          options={["Option 1", "Option 2", "Option 3"]}
          className="mt-4"
          iconLeft={<FaSearch />}
          hasIconLeft={true}
          error={true}
        />

        <SelectInput
          title="Select Option"
          value={selectedOption}
          onChange={handleSelectChange}
          options={["Option 1", "Option 2", "Option 3"]}
          className="mt-4"
          error={true}
        />

        <Input
          title="Search"
          value={text}
          onChange={handleTextChange}
          placeholder="Search..."
          // iconLeft={<FaSearch />}
          iconRight={<FaSearch />}
          // hasIconLeft={true}
          hasIconRight={true}
          className="mt-4"
        />

        <Input
          title="Search"
          value={text}
          onChange={handleTextChange}
          placeholder="Search..."
          // iconLeft={<FaSearch />}
          iconRight={<FaSearch />}
          // hasIconLeft={true}
          hasIconRight={true}
          className="mt-4"
          error={true}
        />
      </div>
    </div>
  );
}
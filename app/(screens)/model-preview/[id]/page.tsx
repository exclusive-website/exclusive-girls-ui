"use client";

import { mockCards } from "../../../mockData"; // Import the data from mockData.ts
import MediaSlider from "../../../components/ui/Slider"; // Import the slider component
import { use } from "react"; // Import the `use` hook from React
import Image from "next/image";

type Params = {
  id: string;
};

type Props = {
  params: Promise<Params>;
};

export default function ModelPreviewPage({ params }: Props) {
  // Unwrap params using React.use() with type assertion
  const { id } = use(params);

  // Find the model with the given ID
  const model = mockCards.find((m) => m.id === id);

  if (!model) return <div>Model not found</div>;

  // Correctly format videos into the expected object type
  const formattedVideos = model.videos.map((videoUrl) => ({
    type: "video" as const, // Use 'as const' for literal type inference
    url: videoUrl,
  }));

  // Combine images and the newly formatted video objects
  const media = [...model.images, ...formattedVideos];

  return (
    <div className="w-full p-2 sm:p-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-8 p-4">
        <div className="w-full md:w-1/2">
          <MediaSlider media={media} />
        </div>
        <div className="w-full w-1/2 flex flex-col">
          <div className="flex flex-col mb-4 w-full md:w-2/3">
            <div className="\ top-3 left-3 flex space-x-2 z-20">
              {model.isNew && (
                <span className="bg-brand text-white px-4 py-1 text-regular font-bold">
                  Nová
                </span>
              )}
              {model.isTopped && (
                <span className="bg-text-darkest text-white px-4 py-1 text-regular font-bold">
                  Top
                </span>
              )}
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-center mb-4 gap-2">
              <h1 className="text-[32px] md:text-[48px] text-white font-bold font-playfair">
                {model.nickname}
              </h1>
              <span className="text-[32px] md:text-[48px] text-white font-bold font-playfair">
                ({model.age})
              </span>
            </div>

            <div className="flex items-center text-white font-[300] text-[24px] font-parkinsans">
              <Image
                src="/icon_location.svg"
                alt="Location"
                className="inline-block mr-2"
                width={24}
                height={24}
              />
              {model.city}
            </div>
            <div className="flex items-center text-white font-[300] text-[20px] font-parkinsans mt-2">
              <span
                className={`relative py-1 pl-6 pr-4 before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full bg-white rounded-[20px] ${
                  model.isAvailable
                    ? "text-black before:bg-pink-500"
                    : "text-black before:bg-black"
                }`}
              >
                {model.isAvailable ? "Dostupná" : "Nedostupná"}
              </span>
            </div>

            <div className="mt-4 text-white font-[300] text-[18px]">
              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Vek:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.age} rokov
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Výška:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.height} cm
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Hmotnosť:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.weight} kg
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Prsia:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  veľkosť {model.chestSize}
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Vlasy:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.hairColor}
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Tetovanie:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.hasTattoo ? "Áno" : "Nie"}
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Prirodzenie:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.shaveStatus}
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Piercing:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.hasPiercing ? "Áno" : "Nie"}
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Fajčiarka:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.isSmoker ? "Áno" : "Nie"}
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Skúsenosť:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.experience}
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Ponúkam:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.serviceType}
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Národnosť:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.nationality}
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Jazykové znalosti:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.languages.join(", ")}
                </p>
              </div>

              <div className="flex items-center flex-row justify-between mb-2 border-b border-gray-600 pb-2">
                <span className="mr-2 text-[#C2C2C2] font-normal font-parkinsans">
                  Služby pre:
                </span>
                <p className="text-white font-bold font-parkinsans">
                  {model.servicesFor.join(", ")}
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between mt-8 pb-2 text-[16px] gap-2">
                <p className="whitespace-pre-line">{model.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

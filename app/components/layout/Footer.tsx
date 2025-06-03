"use client";

import { FaUser } from "react-icons/fa";
import Button from "../micros/Button";
import ToggleSwitch from "../micros/ToggleSwitch";

const regions = {
  CZ: [
    "Prague",
    "Brno",
    "Ostrava",
    "Plzeň",
    "Olomouc",
    "Liberec",
    "Hradec Králové",
    "Ústí nad Labem",
    "Zlín",
    "Pardubice",
  ],
  SK: [
    "Bratislavský kraj",
    "Trnavský kraj",
    "Trenčiansky kraj",
    "Nitriansky kraj",
    "Žilinský kraj",
    "Banskobystrický kraj",
    "Prešovský kraj",
    "Košický kraj",
  ],
};

export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-br from-text-darker to-text-dark text-white py-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 w-full mx-auto px-4 py-8">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-regular text-gray-300 font-parkinsans">
                Kraj
              </p>
              {regions.SK.map((region, index) => (
                <p
                  key={index}
                  className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer"
                >
                  {region}
                </p>
              ))}
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-sm font-regular text-gray-300">Praktiky</p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Klasika
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Bozkávanie
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Anál
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Orál
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Vyvrcholenie do pusy
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Poloha 69
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Prstovanie
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Lízanie
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-sm font-regular text-gray-300">Služby</p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Pre mužov
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Pre ženy
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Pre páry
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Pre zdravotne znevýhodnených
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-sm font-regular text-gray-300">Národnosť</p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Slovensko
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Poľsko
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Ukrajina
              </p>
              <p className="text-regular md:text-lg text-white font-playfair hover:cursor-pointer">
                Česko
              </p>
            </div>

            <div className="flex flex-col items-start justify-top space-y-4">
              <Button
                onClick={() => console.log("Primary button clicked")}
                type="primary"
                hasIcon={true}
                icon={<FaUser/>}
              />
              <Button
                onClick={() => console.log("Primary button clicked")}
                type="primary"
                hasIcon={true}
                icon={<FaUser/>}
              />
              <Button
                onClick={() => console.log("Primary button clicked")}
                type="secondary"
                hasIcon={true}
                icon={<FaUser/>}
              />
              <Button
                onClick={() => console.log("Primary button clicked")}
                type="primaryOutline"
                hasIcon={true}
                icon={<FaUser/>}
              />
              <Button
                onClick={() => console.log("Primary button clicked")}
                type="navbar"
                hasIcon={true}
                icon={<FaUser/>}
              />

<ToggleSwitch
  id="dark-mode"
  defaultChecked={true}
  onToggle={(val) => console.log(val)}
  label="Dark Mode"
/>

            </div>
          </div>

          <div className="grid grid-cols-3 md:flex py-8 border-b-text-gray-4">
            <p className="font-semibold font-parkinsans px-4 text-sm text-white hover:cursor-pointer border-r-2 border-r-white text-center">
              Všeobecné obchodné podmienky
            </p>
            <p className="font-semibold font-parkinsans px-4 text-sm text-white hover:cursor-pointer border-r-2 border-r-white text-center">
              Podmienky registrácie
            </p>
            <p className="font-semibold font-parkinsans px-4 text-sm text-white hover:cursor-pointer">
              Právna doložka
            </p>
          </div>
          <div className="flex py-4 text-text-gray2 text-sm px-4">
            Tieto stránky môžu obsahovať sexuálne explicitný textový alebo
            slovný materiál. Sú preto určené výhradne pre osoby staršie ako 18
            rokov. Prevádzkovateľ stránky nenesie zodpovednosť za akutálnosť a
            pravdivosť zobrazovaných inzerátov. Za všetky informácia uvedené v
            jednotlivých inzerátoch zodpovedajú ich vlastnícia.
          </div>
        </div>
      </div>
    </>
  );
}

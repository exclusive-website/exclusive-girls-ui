"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../micros/Button";
import AdvancedFilters from "./AdvancedFilters";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { mockCards } from "@/app/mockData";

const Navbar = () => {
  const pathname = usePathname();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isRoot = pathname === "/";
  const showFilterBtn = isRoot || pathname === "/results";

  const isDetailPage = pathname.startsWith("/model-preview/");
  const showDetailInfo = isDetailPage;

  const modelId = pathname.split("/model-preview/")[1];
  const model = mockCards.find((card) => card.id === modelId);

  const isOverlayOpen = isFilterOpen || isMenuOpen;

  return (
    <>
      <nav
        className="sticky top-0 w-full z-50 bg-black/60 backdrop-blur-sm transition-all duration-500
          after:content-['']
          after:absolute after:bottom-0 after:left-0
          after:w-full after:h-[2px]
          after:bg-[linear-gradient(to_right,_#ED217E,_#960346)]
          after:rounded-sm"
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-white text-lg font-bold flex items-center gap-2"
          >
            <img src="/logo_exclusive-girls.svg" alt="Logo" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex flex-row items-center space-x-2">
            <Button
              type="navbar"
              text="Obľúbené inzeráty"
              onClick={() => {}}
              hasIcon
              icon={<img src="/icon_heart.svg" />}
            />
            <Button
              type="navbar"
              text="Prihlásiť sa"
              onClick={() => {}}
              hasIcon
              icon={<img src="/icon_user.svg" />}
            />
            <Button type="primary" text="Pridať inzerát" onClick={() => {}} />
            <Button
              type="navbar"
              onClick={() => setIsFilterOpen(true)}
              hasIcon
              icon={<img src="/icon_hamburger-menu.svg" />}
            />
          </div>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <Button
              type="navbar"
              onClick={() => setIsMenuOpen(true)}
              hasIcon
              icon={<img src="/icon_hamburger-menu.svg" />}
            />
          </div>
        </div>

        {/* Mobile Filter Button */}
        {showFilterBtn && (
          <div className="sm:hidden mt-2 flex flex-col p-2 bg-[linear-gradient(to_right,_#ED217E,_#960346)] font-parkinsans">
            <Button
              type="navbar"
              text="Filter dievčat"
              onClick={() => setIsFilterOpen(true)}
              className="w-full"
              hasIcon
              icon={<img src="/icon_parameters.svg" />}
            />
          </div>
        )}
      </nav>

      {/* Detail Info Section */}
      {showDetailInfo && model && (
        <div className="w-full bg-[linear-gradient(to_right,_#ED217E,_#960346)] p-2 sm:p-4">
          <div className="container mx-auto flex justify-between items-center p-4">
            <Button
              type="secondary"
              onClick={() => window.history.back()}
              hasIcon
              icon={<img src="/icon_arrow-left.svg" />}
              className="text-white border-white"
              text="Návrat"
            />
            <div className="flex flex-row gap-4">
              {/* Hide text on mobile, show only icon */}

              <div className="hidden sm:flex flex-row items-center gap-2 text-white font-semibold font-parkinsans">
                {" "}
                <Button
                  type="navbar"
                  text="Do obľúbených"
                  onClick={() => {}}
                  className="text-white"
                  hasIcon={true}
                  icon={<img src="/icon_heart.svg" />}
                />
                <Button
                  type="navbar"
                  text="Nahlásiť"
                  onClick={() => {}}
                  className="text-white"
                  hasIcon={true}
                  icon={<img src="/icon_attention.svg" />}
                />
                <Image
                  src="/icon_info-in-circle.svg"
                  alt="Share Icon"
                  width={24}
                  height={24}
                />
                <span className="">ID: {model.id}</span>
              </div>

              {/* Icons for mobile */}
              <div className="sm:hidden flex flex-row items-center ">
                <Button
                  type="navbar"
                  onClick={() => {}}
                  className="text-white text-[22px]"
                  hasIcon={true}
                  icon={<img src="/icon_heart.svg" />}
                />
                <Button
                  type="navbar"
                  onClick={() => {}}
                  className="text-white"
                  hasIcon={true}
                  icon={<img src="/icon_attention.svg" />}
                />

                {/* Tooltip for model ID */}
                <div className="flex flex-row items-center justtify-center gap-2 text-white font-semibold font-parkinsans relative">
                  <Image
                    src="/icon_info-in-circle.svg"
                    alt="Share Icon"
                    width={24}
                    height={24}
                  />
                  <span className="">ID: {model.id}</span>
                </div>
              </div>
              {/* Tooltip on hover for mobile */}
            </div>
          </div>
        </div>
      )}
      {/* Overlay Backdrop */}
      {isOverlayOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => {
            setIsMenuOpen(false);
            setIsFilterOpen(false);
          }}
        />
      )}

      {/* Slide-In Panels */}
      {isMenuOpen && (
        <div className="z-50">
          <MobileMenu onClose={() => setIsMenuOpen(false)} />
        </div>
      )}

      {isFilterOpen && (
        <div className="z-50">
          <AdvancedFilters onClose={() => setIsFilterOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;

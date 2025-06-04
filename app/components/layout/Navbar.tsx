"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../micros/Button";
import AdvancedFilters from "./AdvancedFilters";
import MobileMenu from "./MobileMenu";



const Navbar = () => {
  const pathname = usePathname();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  

  const isRoot = pathname === "/";
  const showFilterBtn = isRoot || pathname === "/results";

  const isOverlayOpen = isFilterOpen || isMenuOpen;

  // Lock scroll when overlay is open
  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   const scrollBarWidth =
  //     window.innerWidth - document.documentElement.clientWidth;

  //   if (isOverlayOpen) {
  //     document.body.style.overflow = "hidden";
  //     document.body.style.paddingRight = `${scrollBarWidth}px`;
  //   } else {
  //     document.body.style.overflow = "";
  //     document.body.style.paddingRight = "";
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //     document.body.style.paddingRight = "";
  //   };
  // }, [isOverlayOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-50 bg-black/60 backdrop-blur-sm transition-all duration-500
          after:content-['']
          after:absolute after:bottom-0 after:left-0
          after:w-full after:h-[2px]
          after:bg-[linear-gradient(to_right,_#ED217E,_#960346)]
          after:rounded-sm`}
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
            <Button
              type="primary"
              text="Pridať inzerát"
              onClick={() => {}}
            />
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

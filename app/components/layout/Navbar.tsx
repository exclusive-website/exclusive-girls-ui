"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../micros/Button";
import AdvancedFilters from "./AdvancedFilters";

const Navbar = () => {
  const pathname = usePathname();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Disable scroll when filter is open
  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   const scrollBarWidth =
  //     window.innerWidth - document.documentElement.clientWidth;

  //   if (isFilterOpen) {
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
  // }, [isFilterOpen]);

  const isRoot = pathname === "/";
  const showFilterBtn = isRoot || pathname === "/results";

  return (
    <>
      <nav
        className={`${
          isRoot ? "absolute" : "relative"}
          w-full bg-black/60 z-10
          after:content-['']
          after:absolute after:bottom-0 after:left-0
          after:w-full after:h-[2px]
          after:bg-[linear-gradient(to_right,_#ED217E,_#960346)]
          after:rounded-sm`}
      >

      {/* <nav
        className="
        flex flex-col sm:flex-row justify-between items-center
        h-auto sm:h-[80px] md:h-[100px]
        sticky top-0
          w-full bg-black/60 z-30
          after:content-['']
          after:absolute after:bottom-0 after:left-0
          after:w-full after:h-[2px]
          after:bg-[linear-gradient(to_right,_#ED217E,_#960346)]
          after:rounded-sm"
      > */}
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link
            href="/"
            className="text-white text-lg font-bold flex items-center gap-[8px]"
          >
            <img src="/logo_exclusive-girls.svg" alt="Logo" />
          </Link>

          <div className="flex items-center">
            <div className="hidden sm:flex flex-row items-center">
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
            </div>

            <Button
              type="navbar"
              onClick={() => setIsFilterOpen(true)}
              hasIcon
              icon={<img src="/icon_hamburger-menu.svg" />}
            />
          </div>
        </div>

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

      {/* Overlay + Sidebar */}
      {isFilterOpen && (
        <>
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsFilterOpen(false)}
          />

          {/* Sidebar */}
          <div className="z-50">
            <AdvancedFilters onClose={() => setIsFilterOpen(false)} />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../micros/Button";
import AdvancedFilters from "./AdvancedFilters"; // new component

const Navbar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
  document.body.style.overflow = isFilterOpen ? "hidden" : "";
  return () => {
    document.body.style.overflow = "";
  };
}, [isFilterOpen]);

  if (!isMounted) return null;

  const isRoot = pathname === "/";
  const showFilterBtn = pathname === "/" || pathname === "/results";

  return (
    <>
      <nav
        className={`${
          isRoot ? "absolute" : "relative"
        } w-full bg-black/60 z-10 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-pink-gradient after:rounded-sm`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link
            href="/"
            className="text-white text-lg font-bold flex items-center gap-[8px]"
          >
            <img src="/logo_exclusive-girls.svg" alt="Logo" />
          </Link>

          <div className="flex items-center">
            {/* Desktop buttons */}
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

            {/* Hamburger */}
            <Button
              type="navbar"
              onClick={() => {}}
              hasIcon
              icon={<img src="/icon_hamburger-menu.svg" />}
            />
          </div>
        </div>

        {/* Mobile filter button */}
        {showFilterBtn && (
          <div className="sm:hidden mt-2 flex flex-col p-2 bg-[linear-gradient(to_right,_#ED217E,_#960346)]
 font-parkinsans">
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

      {/* Filter Sidebar */}
      {isFilterOpen && <AdvancedFilters onClose={() => setIsFilterOpen(false)} />}
    </>
  );
};

export default Navbar;

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../micros/Button";

const Navbar = () => {
  const pathname = usePathname();
  const isRoot = pathname === "/";
  return (
    <nav
      className={`${
        isRoot ? "absolute" : "relative"
      } p-4 w-full bg-black/60 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[linear-gradient(to_right,_#ED217E,_#960346)] after:rounded-sm z-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - always visible */}
        <Link
          href="/"
          className="text-white text-lg font-bold flex items-center gap-[8px]"
        >
          <img
            src="/logo_exclusive-girls.svg"
            alt="Logo"
            className="h-[32px]"
          />
        </Link>

        <div className="flex items-center gap-[4px]">
          {/* Desktop links - hidden on mobile */}
          <div className="hidden sm:flex flex-row gap-[4px] items-center">
            <Link
              href="/"
              className="text-white hover:text-gray-300 font-parkinsans font-bold flex items-center gap-[4px]"
            >
              <img src="/icon_heart.svg" className="w-[24px] h-[24px]" />
              <span className="text-[16px]">Obľúbené inzeráty</span>
            </Link>

            <Link
              href="/"
              className="text-white px-[24px] hover:text-gray-300 font-parkinsans font-bold flex items-center gap-[4px]"
            >
              <img src="/icon_user.svg" className="w-[24px] h-[24px]" />
              <span>Prihlásiť sa</span>
            </Link>

            {/* <Link
              href="/"
              className="text-white px-[24px] font-parkinsans font-bold bg-brand rounded-md h-[48px] flex items-center"
            >
              <span>Pridať inzerát</span>
            </Link> */}

            <Button
              type="primary"
              text="Pridať inzerát"
              onClick={() => {}}
            />
          </div>

          {/* Hamburger - always visible */}
          {/* <button className="text-white px-[24px] py-[17px] hover:text-gray-300 font-parkinsans font-bold flex items-center gap-[4px]">
            <img src="/icon_hamburger-menu.svg" className="w-[24px] h-[24px]" />
          </button> */}

            <Button
              type="navbar"
              onClick={() => {}}
              hasIcon={true}
              icon={<img src="/icon_hamburger-menu.svg" />}
            />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

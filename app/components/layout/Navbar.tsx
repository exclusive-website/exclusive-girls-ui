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
          <img src="/logo_exclusive-girls.svg" alt="Logo" />
        </Link>

        <div className="flex items-center">
          {/* Desktop links - hidden on mobile */}
          <div className="hidden sm:flex flex-row items-center">
            <Button
              type="navbar"
              text="Obľúbené inzeráty"
              onClick={() => {}}
              hasIcon={true}
              icon={<img src="/icon_heart.svg" />}
            />

            <Button
              type="navbar"
              text="Prihlásiť sa"
              onClick={() => {}}
              hasIcon={true}
              icon={<img src="/icon_user.svg" />}
            />

            <Button type="primary" text="Pridať inzerát" onClick={() => {}} />
          </div>

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

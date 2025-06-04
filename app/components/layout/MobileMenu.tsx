import { FC } from "react";
import Button from "../micros/Button";

interface Props {
  onClose: () => void;
}

const MobileMenu: FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white z-80 flex flex-col p-4 font-parkinsans">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
        <span className="text-brand font-bold text-lg">Menu</span>
        <button onClick={onClose} className="text-black text-4xl">
          ×
        </button>
      </div>

      {/* Navigation Links */}
      <div className="py-16 flex flex-col">
      <nav className="flex flex-col gap-6 text-[20px] font-semibold text-black overflow-y-hidden">
        <a href="/pricing">Cenník</a>
        <a href="/login">Prihlásenie</a>
        <a href="/register">Registrácia</a>
        <a href="/results">Filter dievčat</a>
        <a href="/terms">Všeobecné obchodné podmienky</a>
        <a href="/registration-terms">Podmienky registrácie</a>
        <a href="/legal">Právna doložka</a>
      </nav>

      {/* CTA Button */}
      <div className="mt-8">
        <Button type="primary" text="Pridať inzerát" onClick={() => {}} className="py-3" />
      </div>
    </div>
    </div>
  );
};

export default MobileMenu;

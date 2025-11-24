import { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import "./Header.css";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/concepts", label: "Conceitos" },
  { href: "/web-application", label: "Aplicação Web" },
  { href: "/example", label: "Exemplo" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Logo />
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-container ${isOpen ? "show" : ""}`}>
        <NavLink links={navLinks} />
      </div>
    </header>
  );
}

export default Header;

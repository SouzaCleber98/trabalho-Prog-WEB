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
  return (
    <header className="header">
      <Logo />
      <div className="nav-container">
        <NavLink links={navLinks} />
      </div>
    </header>
  );
}

export default Header;

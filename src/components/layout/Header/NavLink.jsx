import { NavLink as Link } from "react-router-dom";
import "./NavLink.css";

function NavLink({ links }) {
  return (
    <nav className="menu">
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLink;

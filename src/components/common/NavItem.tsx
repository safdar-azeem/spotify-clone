import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  label: string;
  isActive: boolean;
  icon: JSX.Element;
}

const NavItem = ({ to, icon, label, isActive }: NavItemProps) => (
  <li>
    <NavLink
      to={to}
      className={`flex items-center gap-x-4 transition duration-100 hover:text-white ${
        isActive ? "text-white" : ""
      }`}
    >
      {icon}
      <span className="hidden md:block font-bold">{label}</span>
    </NavLink>
  </li>
);

export default NavItem;

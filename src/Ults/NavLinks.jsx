/* eslint-disable react/prop-types */
import classes from "../Styles/NavLinks.module.css";
import { NavLink } from "react-router-dom";

export default function NavLinks({ to, children }) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? classes.active : "")}
      to={to}
    >
      {children}
    </NavLink>
  );
}

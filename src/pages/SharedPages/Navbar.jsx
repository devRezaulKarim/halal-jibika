import { NavLink } from "react-router-dom";
import classes from "../../Styles/Navbar.module.css";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>Halal Jibika</div>
        <div className={classes.burgerMenu}>
          <div
            className={classes.burgerMenuBtn}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <span>
                <IoCloseSharp />
              </span>
            ) : (
              <span>
                <IoMenu />
              </span>
            )}
          </div>
        </div>
        <nav
          className={`${classes.navLinks} ${
            openMenu ? classes.openMobileNavLinks : ""
          }`}
        >
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to={"/jobs"}
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to={"/favorite"}
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to={"/applied"}
              >
                Applied
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to={"/login"}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink>Sign out</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

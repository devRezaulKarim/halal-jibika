import { NavLink } from "react-router-dom";
import classes from "../../Styles/Navbar.module.css";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import NavLinks from "../../Ults/NavLinks";

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
              <NavLinks to={"/"}>Home</NavLinks>
            </li>
            <li>
              <NavLinks to={"/jobs"}>Jobs</NavLinks>
            </li>
            <li>
              <NavLinks to={"/favorite"}>Favorite</NavLinks>
            </li>
            <li>
              <NavLinks to={"/applied"}>Applied</NavLinks>
            </li>
            <li>
              <NavLinks to={"/about"}>About</NavLinks>
            </li>
            <li>
              <NavLinks to={"/contact"}>Contact</NavLinks>
            </li>
            <li>
              <NavLinks to={"/login"}>Login</NavLinks>
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

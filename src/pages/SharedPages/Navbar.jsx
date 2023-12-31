import { Link, NavLink } from "react-router-dom";
import classes from "../../Styles/Navbar.module.css";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import NavLinks from "../../Components/NavLinks";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`${classes.container} ${scrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Link>Halal Jibika</Link>
        </div>
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
              <NavLinks to={"/"} setOpenMenu={setOpenMenu}>
                Home
              </NavLinks>
            </li>
            <li>
              <NavLinks to={"/jobs"} setOpenMenu={setOpenMenu}>
                Jobs
              </NavLinks>
            </li>
            <li>
              <NavLinks to={"/favorite"} setOpenMenu={setOpenMenu}>
                Favorite
              </NavLinks>
            </li>
            <li>
              <NavLinks to={"/applied"} setOpenMenu={setOpenMenu}>
                Applied
              </NavLinks>
            </li>
            <li>
              <NavLinks to={"/about"} setOpenMenu={setOpenMenu}>
                About
              </NavLinks>
            </li>
            <li>
              <NavLinks to={"/contact"} setOpenMenu={setOpenMenu}>
                Contact
              </NavLinks>
            </li>
            <li>
              <NavLinks to={"/login"} setOpenMenu={setOpenMenu}>
                Login
              </NavLinks>
            </li>
            <li>
              <NavLink
                className={classes.links}
                onClick={() => setOpenMenu(false)}
              >
                Sign out
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

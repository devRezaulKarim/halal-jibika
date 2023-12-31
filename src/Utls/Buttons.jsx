/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "../Styles/Buttons.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function Buttons({ handler, children }) {
  return (
    <button>
      <Link to={handler} className={classes.btn}>
        {children} <FaArrowRight />
      </Link>
    </button>
  );
}

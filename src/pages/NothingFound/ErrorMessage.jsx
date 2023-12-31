/* eslint-disable react/prop-types */
import classes from "../../Styles/ErrorMessage.module.css";

export default function ErrorMessage({ children }) {
  return (
    <div className={classes.errorMsgWrapper}>
      <p className={classes.errorMsg}>{children}</p>
    </div>
  );
}

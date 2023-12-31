/* eslint-disable react/prop-types */
import classes from "../Styles/JobCard.module.css";
import Buttons from "./Buttons";

export default function JobCard({ d }) {
  const { title, logo, companyName, position, description } = d;
  return (
    <div className={classes.jobCard}>
      <div className={classes.cardTop}>
        <div className={classes.cardImg}>
          <img src={logo} alt="" />
        </div>
        <div className={classes.companyName}>
          <h2>
            Company: <span>{companyName}</span>
          </h2>
        </div>
      </div>

      <div className={classes.cardBottom}>
        <h1>{title}</h1>
        <h4>Position: {position}</h4>
        <p>{description}</p>
        <div className={classes.cardBtns}>
          <div className={`${classes.btn} ${classes.applyBtn}`}>
            <Buttons handler={console.log("Clicked")}>Apply</Buttons>
          </div>
          <div className={`${classes.btn} ${classes.favoriteBtn}`}>
            <Buttons handler={console.log("Clicked")}>Favorite</Buttons>
          </div>
          <div className={`${classes.btn} ${classes.editBtn}`}>
            <Buttons handler={console.log("Clicked")}>Edit</Buttons>
          </div>
          <div className={`${classes.btn} ${classes.deleteBtn}`}>
            <Buttons handler={console.log("Clicked")}>Delete</Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}

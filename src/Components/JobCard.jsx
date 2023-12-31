import classes from "../Styles/JobCard.module.css";
import Buttons from "../Utls/Buttons";

export default function JobCard() {
  return (
    <div className={classes.jobCard}>
      <div className={classes.cardTop}>
        <div className={classes.cardImg}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt=""
          />
        </div>
        <div className={classes.companyName}>
          <h2>
            Company: <span>Google</span>
          </h2>
        </div>
      </div>

      <div className={classes.cardBottom}>
        <h1>Google Internship Program</h1>
        <h4>Position: Intern Developer</h4>
        <p>This is an internship opportunity from Google</p>
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

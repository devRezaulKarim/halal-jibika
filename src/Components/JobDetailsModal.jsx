/* eslint-disable react/prop-types */
import { IoMdCloseCircle } from "react-icons/io";
import classes from "../Styles/JobDetailsModal.module.css";
import Buttons from "./Buttons";

export default function JobDetailsModal({
  showDetails,
  setShowDetails,
  handleApply,
}) {
  const {
    title,
    companyName,
    website,
    location,
    salary,
    position,
    deadLine,
    description,
  } = showDetails;
  return (
    <div className={classes.jobDetailModal}>
      <div>
        <button
          onClick={() => setShowDetails(null)}
          className={classes.closeModalBtn}
        >
          <IoMdCloseCircle />
        </button>
        <div className={classes.detailsWrapper}>
          <div className={classes.detailsTop}>
            <div className={classes.detailsPhoto}>
              <img src={showDetails.logo} alt="" />
            </div>
            <div className={classes.companyInfo}>
              <h3>{companyName}</h3>
              <h5>{website}</h5>
              <h5>{location}</h5>
            </div>
          </div>
          <div className={classes.detailsBottom}>
            <div className={classes.jobInfo}>
              <div className={classes.heading}>
                <div>
                  <h2>{title}</h2>
                  <p>
                    <span>Dead Line:</span> {deadLine}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Position:</span> {position}
                  </p>
                  <p>
                    <span>Salary:</span> {salary}
                  </p>
                </div>
              </div>
              <p className={classes.desc}>
                <span>Description:</span> {description}
              </p>
            </div>
            <div className={`${classes.btn}`}>
              <div className={`${classes.applyBtn}`}>
                <Buttons handler={(event) => handleApply(showDetails, event)}>
                  {showDetails?.isApplied ? "Applied" : "Apply Now"}
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

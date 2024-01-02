/* eslint-disable react/prop-types */
import { IoMdCloseCircle } from "react-icons/io";
import classes from "../Styles/JobDetailsModal.module.css";

export default function JobDetailsModal({ showDetails, setShowDetails }) {
  const {
    title,
    companyName,
    companyWebsite,
    companyLocation,
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
              <h5>{companyName}</h5>
              <h5>
                {"companyWebsite"}: {companyWebsite}
              </h5>
              <h5>
                {"companyLocation"}: {companyLocation}
              </h5>
            </div>
          </div>
          <div className={classes.detailsBottom}>
            <div className={classes.jobInfo}>
              <h2>{title}</h2>
              <p>{salary}</p>
              <p>{position}</p>
              <p>{deadLine}</p>
              <p>{description}</p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

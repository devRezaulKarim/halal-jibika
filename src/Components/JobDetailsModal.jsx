/* eslint-disable react/prop-types */
import { IoMdCloseCircle } from "react-icons/io";
import classes from "../Styles/JobDetailsModal.module.css";

export default function JobDetailsModal({ showDetails, setShowDetails }) {
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
          <div>
            <img src={showDetails.logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

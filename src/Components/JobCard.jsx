/* eslint-disable react/prop-types */
import classes from "../Styles/JobCard.module.css";
import Buttons from "./Buttons";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function JobCard({ job, featured, handleDelete, handleEdit }) {
  const { title, logo, companyName, position, description, id } = job;
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
            <Buttons handler={() => console.log("Clicked")}>Apply Now</Buttons>
          </div>
          <div className={`${classes.btn} ${classes.favoriteBtn}`}>
            <Buttons handler={() => console.log("Clicked")}>
              <FaRegHeart />
            </Buttons>
          </div>
          {!featured ? (
            <>
              <div className={`${classes.btn} ${classes.editBtn}`}>
                <Buttons handler={() => handleEdit(job)}>
                  <FaEdit />
                </Buttons>
              </div>
              <div className={`${classes.btn} ${classes.deleteBtn}`}>
                <Buttons handler={() => handleDelete(id)}>
                  <MdDelete />
                </Buttons>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

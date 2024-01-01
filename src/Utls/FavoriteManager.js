/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";

export default function FavoriteManager(jobs, job, setJobs) {
  const status = job.isFavorite === "undefined" ? true : !job.isFavorite;
  axios
    .put(`http://localhost:9000/jobs/${job.id}`, {
      ...job,
      isFavorite: status,
    })
    .then((res) => {
      setJobs(
        jobs.map((j) => {
          if (j.id === job.id) {
            return { ...j, isFavorite: status };
          }
          return j;
        })
      );
      job.isFavorite
        ? toast.warn("Job has been removed from favorite", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        : toast.success("Job has been added to favorite", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    });
}

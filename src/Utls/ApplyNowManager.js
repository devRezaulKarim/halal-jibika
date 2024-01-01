/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";

export default function ApplyNowManager(jobs, job, setJobs) {
  axios
    .patch(`http://localhost:9000/jobs/${job.id}`, {
      ...job,
      isApplied: true,
    })
    .then((res) => {
      setJobs(
        jobs.map((j) => {
          if (j.id === job.id) {
            return { ...j, isApplied: true };
          }
          return j;
        })
      );

      toast.success("Applied successfully", {
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

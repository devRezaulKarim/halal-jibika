/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";

export default function ApplyNowManager(jobs, job, setJobs, email) {
  if (job.appliedBy?.includes(email)) {
    toast.warn("You already applied to this job!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return;
  }
  axios
    .put(`http://localhost:9000/jobs/${job.id}`, {
      ...job,
      appliedBy:
        typeof job.appliedBy === "undefined"
          ? [email]
          : [...job.appliedBy, email],
    })
    .then((res) => {
      setJobs(
        jobs.map((j) => {
          if (j.id === job.id) {
            return {
              ...j,
              appliedBy:
                typeof job.appliedBy === "undefined"
                  ? [email]
                  : [...job.appliedBy, email],
            };
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

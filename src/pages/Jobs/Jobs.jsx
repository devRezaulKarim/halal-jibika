import { useEffect, useState } from "react";
import JobCard from "../../Components/JobCard";
import useFetch from "../../Hooks/useFetch";
import classes from "../../Styles/Jobs.module.css";
import Spinner from "../../Utls/Spinner";
import ErrorMessage from "../NothingFound/ErrorMessage";
import axios from "axios";
import { toast } from "react-toastify";
import Form from "../../Components/Form";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";

export default function Jobs() {
  // const [editingJob, setEditingJob] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const { loading, error, data } = useFetch("http://localhost:9000/jobs");
  const [jobs, setJobs] = useState(data);
  const [editingID, setEditingID] = useState(null);
  useEffect(() => {
    setJobs(data);
  }, [data]);

  //Handling delete job
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9000/jobs/${id}`);
    setJobs(jobs.filter((d) => d.id !== id));
    toast.warn("The job has been deleted", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  //opening the form as a modal for editing the job. and showing the prev details.
  const handleEdit = (job) => {
    setEditingID(job.id);
    reset(job);
  };

  //handle Close modal

  // handle form submission
  const onSubmit = (data) => {
    axios
      .put(`http://localhost:9000/jobs/${editingID}`, data)
      .then((res) => {
        setJobs(
          jobs.map((job) => {
            if (job.id === editingID) {
              return { ...job, ...data };
            }
            return job;
          })
        );
        setEditingID(null);
        toast.success("Job updated successfully");
      })
      .catch((error) => {
        toast.error("Something Went Wrong");
      });
  };

  useEffect(() => {
    console.log(jobs);
  });

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.jobs}>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
        {editingID ? (
          <div className={classes.editForm}>
            <div>
              <button
                onClick={() => setEditingID(false)}
                className={classes.closeModalBtn}
              >
                <IoMdCloseCircle />
              </button>
              <Form
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                register={register}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

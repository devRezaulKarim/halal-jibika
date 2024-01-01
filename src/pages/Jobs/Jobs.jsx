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

export default function Jobs() {
  // const [editingJob, setEditingJob] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const { loading, error, data } = useFetch("http://localhost:9000/jobs");
  const [jobs, setJobs] = useState(data);
  const [isEdit, setIsEdit] = useState(false);
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
    setIsEdit(true);
    reset(job);
  };

  // handle form submition
  const onSubmit = (data) => {
    console.log(data);
  };

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
        {isEdit ? (
          <Form
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            register={register}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

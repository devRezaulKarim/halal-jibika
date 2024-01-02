/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import classes from "../../Styles/Applied.module.css";
import JobCard from "../../Components/JobCard";
import Spinner from "../../Utls/Spinner";
import ErrorMessage from "../NothingFound/ErrorMessage";

export default function Applied() {
  const { loading, error, data } = useFetch("http://localhost:9000/jobs");
  const [appliedJobs, setAppliedJobs] = useState(data);
  useEffect(() => {
    setAppliedJobs(data.filter((d) => d.isApplied));
  }, [data]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    <ErrorMessage>{error}</ErrorMessage>;
  }
  if (appliedJobs.length === 0) {
    return (
      <h1 className={classes.emptyMessage}>
        You didn't apply for any job yet!!
      </h1>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {appliedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            handleFavorite={"handleFavorite"}
            handleApply={"handleApply"}
            setShowDetails={"setShowDetails"}
            fromApplied={true}
          />
        ))}
      </div>
    </div>
  );
}

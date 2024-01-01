import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import classes from "../Styles/FeaturedJobs.module.css";
import Spinner from "../Utls/Spinner";
import ErrorMessage from "../pages/NothingFound/ErrorMessage";
import Buttons from "./Buttons";
import JobCard from "./JobCard";
import FavoriteManager from "../Utls/FavoriteManager";
import ApplyNowManager from "../Utls/ApplyNowManager";

export default function FeaturedJobs() {
  const { loading, error, data } = useFetch("http://localhost:9000/jobs");
  const [jobs, setJobs] = useState(data);
  useEffect(() => {
    setJobs(data);
  }, [data]);

  //Handle Favorite

  const handleFavorite = (job) => {
    FavoriteManager(jobs, job, setJobs);
  };

  //Handle Apply now
  const handleApply = (job) => {
    ApplyNowManager(jobs, job, setJobs);
  };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
  return (
    <div>
      <div className={classes.featuredHeading}>
        <h1>Latest Jobs</h1>
      </div>
      <div className={classes.featuredProducts}>
        {[...jobs]
          .reverse()
          .slice(0, 4)
          .map((job) => (
            <JobCard
              key={job.id}
              job={job}
              featured={true}
              handleFavorite={handleFavorite}
              handleApply={handleApply}
            />
          ))}
      </div>
      <div className={classes.showAllBtn}>
        <div>
          <Buttons to={"/jobs"}>Show All Jobs</Buttons>
        </div>
      </div>
    </div>
  );
}

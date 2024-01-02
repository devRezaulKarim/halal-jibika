/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import classes from "../../Styles/Favorite.module.css";
import JobCard from "../../Components/JobCard";
import FavoriteManager from "../../Utls/FavoriteManager";
import Spinner from "../../Utls/Spinner";
import ErrorMessage from "../NothingFound/ErrorMessage";

export default function Favorite() {
  const { loading, error, data } = useFetch("http://localhost:9000/jobs");
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  useEffect(() => {
    if (data) {
      setFavoriteJobs(data.filter((d) => d.isFavorite));
    }
  }, [data]);

  const handleFavorite = (job, event) => {
    event.stopPropagation();
    FavoriteManager(favoriteJobs, job, setFavoriteJobs, true);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
  if (favoriteJobs.length === 0) {
    return (
      <h1 className={classes.emptyMessage}>
        You don't have any favorite job!!
      </h1>
    );
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {favoriteJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            handleFavorite={handleFavorite}
            handleApply={"handleApply"}
            setShowDetails={"setShowDetails"}
            fromFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}

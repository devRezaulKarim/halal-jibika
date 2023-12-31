import useFetch from "../Hooks/useFetch";
import classes from "../Styles/FeaturedJobs.module.css";
import Spinner from "../Utls/Spinner";
import ErrorMessage from "../pages/NothingFound/ErrorMessage";
import JobCard from "./JobCard";

export default function FeaturedJobs() {
  const { loading, error, data } = useFetch("http://localhost:9000/jobs");

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
  return (
    <div>
      <div className={classes.featuredHeading}>
        <h1>Featured Jobs</h1>
      </div>
      <div className={classes.featuredProducts}>
        {[...data]
          .reverse()
          .slice(0, 4)
          .map((d) => (
            <JobCard key={d.id} d={d} featured={true} />
          ))}
      </div>
    </div>
  );
}

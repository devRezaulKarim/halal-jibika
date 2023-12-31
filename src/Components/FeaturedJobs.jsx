import useFetch from "../Hooks/useFetch";
import classes from "../Styles/FeaturedJobs.module.css";
import Spinner from "../Utls/Spinner";
import ErrorMessage from "../pages/NothingFound/ErrorMessage";
import Buttons from "./Buttons";
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
        <h1>Latest Jobs</h1>
      </div>
      <div className={classes.featuredProducts}>
        {[...data]
          .reverse()
          .slice(0, 4)
          .map((d) => (
            <JobCard key={d.id} d={d} featured={true} />
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

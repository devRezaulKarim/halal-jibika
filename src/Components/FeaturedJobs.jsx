import classes from "../Styles/FeaturedJobs.module.css";
import JobCard from "./JobCard";

export default function FeaturedJobs() {
  return (
    <div>
      <div className={classes.featuredHeading}>
        <h1>Featured Jobs</h1>
      </div>
      <div className={classes.featuredProducts}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}

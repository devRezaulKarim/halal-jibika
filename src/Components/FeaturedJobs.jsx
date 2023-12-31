import classes from "../Styles/FeaturedJobs.module.css";
import ProductCard from "./JobCard";

export default function FeaturedProducts() {
  return (
    <div>
      <div className={classes.featuredHeading}>
        <h1>Featured Jobs</h1>
      </div>
      <div className={classes.featuredProducts}>
        <ProductCard />
      </div>
    </div>
  );
}

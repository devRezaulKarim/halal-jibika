import JobCard from "../../Components/JobCard";
import useFetch from "../../Hooks/useFetch";
import classes from "../../Styles/Jobs.module.css";
import Spinner from "../../Utls/Spinner";
import ErrorMessage from "../NothingFound/ErrorMessage";

export default function Jobs() {
  const { loading, error, data } = useFetch("http://localhost:9000/jobs");

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
          {data.map((d) => (
            <JobCard key={d.id} d={d} />
          ))}
        </div>
      </div>
    </div>
  );
}

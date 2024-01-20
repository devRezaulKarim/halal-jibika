import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import classes from "../Styles/FeaturedJobs.module.css";
import Spinner from "../Utls/Spinner";
import ErrorMessage from "../pages/NothingFound/ErrorMessage";
import Buttons from "./Buttons";
import JobCard from "./JobCard";
import FavoriteManager from "../Utls/FavoriteManager";
import ApplyNowManager from "../Utls/ApplyNowManager";
import JobDetailsModal from "./jobDetailsModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";
import { toast } from "react-toastify";

export default function FeaturedJobs() {
  const [user, userLoading] = useAuthState(auth);
  const [showDetails, setShowDetails] = useState(null);
  const { dataLoading, error, data } = useFetch(
    "https://rezauls-json-server.vercel.app/jobs"
  );
  const [jobs, setJobs] = useState(data);
  useEffect(() => {
    setJobs(data);
  }, [data]);

  const navigate = useNavigate();
  const loading = userLoading || dataLoading;
  //Handle Favorite

  const handleFavorite = (job, event) => {
    event.stopPropagation();
    if (!user) {
      navigate("/login");
      toast.warn("Login first to continue!", {
        theme: "dark",
        autoClose: 1500,
      });
    } else {
      FavoriteManager(jobs, job, setJobs, false, user.email);
    }
  };

  //Handle Apply now
  const handleApply = (job, event) => {
    event.stopPropagation();
    if (!user) {
      navigate("/login");
      toast.warn("Login first to continue!", {
        theme: "dark",
        autoClose: 1500,
      });
    } else {
      ApplyNowManager(jobs, job, setJobs, user.email);
    }
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
              email={user?.email}
              featured={true}
              handleFavorite={handleFavorite}
              handleApply={handleApply}
              setShowDetails={setShowDetails}
            />
          ))}
      </div>
      <div className={classes.showAllBtn}>
        <div>
          <Buttons to={"/jobs"}>Show All Jobs</Buttons>
        </div>
      </div>
      {showDetails ? (
        <JobDetailsModal
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      ) : (
        ""
      )}
    </div>
  );
}

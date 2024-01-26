import { useForm } from "react-hook-form";
import classes from "../Styles/JobApplicationForm.module.css";
import ApplyNowManager from "../Utls/ApplyNowManager";

const JobApplicationForm = ({ jobs, setJobs, job, setJob, email }) => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    console.log(job);
    // reset()
    // ApplyNowManager(jobs, job, setJobs, email);
    setJob(null);
  };

  return (
    <div className={classes.jobApplicationForm}>
      <h2 className={classes.heading}>Job Application Form</h2>
      <div className={classes.closeBtn}>
        <button>X</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formDivider}>
          <div>
            <label>
              Full Name:
              <input
                type="text"
                {...register("fullName", {
                  required: "This field is required",
                })}
              />
              {errors && <p>{errors.fullName.message}</p>}
            </label>

            <label>
              Email:
              <input
                type="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors && <p>{errors.email.message}</p>}
            </label>

            <label>
              Phone Number:
              <input
                type="tel"
                {...register("phoneNumber", {
                  required: "This field is required",
                })}
              />
              {errors && <p>{errors.phoneNumber.message}</p>}
            </label>

            <label>
              Education:
              <textarea
                {...register("education", {
                  required: "This field is required",
                })}
              />
              {errors && <p>{errors.education.message}</p>}
            </label>
          </div>

          <div>
            <label>
              Work Experience:
              <textarea
                {...register("workExperience", {
                  required: "This field is required",
                })}
              />
              {errors && <p>{errors.workExperience.message}</p>}
            </label>

            <label>
              Skills:
              <textarea
                {...register("skills", { required: "This field is required" })}
              />
              {errors && <p>{errors.skills.message}</p>}
            </label>

            <label>
              Cover Letter:
              <textarea
                {...register("coverLetter", {
                  required: "This field is required",
                })}
              />
              {errors && <p>{errors.coverLetter.message}</p>}
            </label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;

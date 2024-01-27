import { useForm } from "react-hook-form";
import classes from "../Styles/JobApplicationForm.module.css";
import { ImCross } from "react-icons/im";
import ApplyNowManager from "../Utls/ApplyNowManager";

const JobApplicationForm = ({ jobs, setJobs, job, setJob, email }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors: {
        fullName,
        formEmail,
        phoneNumber,
        education,
        workExperience,
        skills,
        coverLetter,
      },
    },
  } = useForm();

  const errorMsg = "*This field is required";

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
        <button onClick={() => setJob(null)}>
          <ImCross />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formDivider}>
          <div>
            <label>
              Full Name:
              <input
                type="text"
                placeholder="Name"
                {...register("fullName", {
                  required: errorMsg,
                })}
              />
              {fullName && <p>{fullName.message}</p>}
            </label>

            <label>
              Email:
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                  required: errorMsg,
                })}
              />
              {formEmail && <p>{formEmail.message}</p>}
            </label>

            <label>
              Phone Number:
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: errorMsg,
                })}
              />
              {phoneNumber && <p>{phoneNumber.message}</p>}
            </label>

            <label>
              Education:
              <textarea
                placeholder="Educations"
                {...register("education", {
                  required: errorMsg,
                })}
              />
              {education && <p>{education.message}</p>}
            </label>
          </div>

          <div>
            <label>
              Work Experience:
              <textarea
                placeholder="Experience"
                {...register("workExperience", {
                  required: errorMsg,
                })}
              />
              {workExperience && <p>{workExperience.message}</p>}
            </label>

            <label>
              Skills:
              <textarea
                placeholder="Skills"
                {...register("skills", { required: errorMsg })}
              />
              {skills && <p>{skills.message}</p>}
            </label>

            <label>
              Cover Letter:
              <textarea
                placeholder="Cover Letter"
                {...register("coverLetter", {
                  required: errorMsg,
                })}
              />
              {coverLetter && <p>{coverLetter.message}</p>}
            </label>
          </div>
        </div>

        <div className={classes.submitBtn}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;

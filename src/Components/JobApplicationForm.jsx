import { useForm } from 'react-hook-form';

const JobApplicationForm = () => {
  const { register, handleSubmit, errors,reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
    reset()
  };

  return (
    <div>
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Full Name:
          <input
          type="text"
            {...register( "fullName", { required: 'This field is required' })}
          />
          {errors && <p>{errors.fullName.message}</p>}
        </label>

        <label>
          Email:
          <input
            type="email"
          {...register("email",{
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors && <p>{errors.email.message}</p>}
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            
            {...register("phoneNumber", { required: 'This field is required' })}
          />
          {errors && <p>{errors.phoneNumber.message}</p>}
        </label>

        <label>
          Education:
          <textarea
            
            {...register("education",{ required: 'This field is required' })}
          />
          {errors && <p>{errors.education.message}</p>}
        </label>

        <label>
          Work Experience:
          <textarea
          {...register("workExperience",{ required: 'This field is required' })}
          />
          {errors && <p>{errors.workExperience.message}</p>}
        </label>

        <label>
          Skills:
          <textarea
           {...register("skills",{ required: 'This field is required' })}
          />
          {errors && <p>{errors.skills.message}</p>}
        </label>

        <label>
          Cover Letter:
          <textarea
            {...register("coverLetter",{ required: 'This field is required' })}
          />
          {errors && <p>{errors.coverLetter.message}</p>}
        </label>

        <button type="submit">Submit</button> 
      </form>
    </div>
  );
};

export default JobApplicationForm;
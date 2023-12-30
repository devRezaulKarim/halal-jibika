import { Link } from "react-router-dom";
import classes from "../../Styles/Registration.module.css";
import { useForm } from "react-hook-form";

export default function Registration() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: {
      errors: { email, password, userName },
    },
  } = useForm();

  const errorMsg = "*This field is required";

  const onSubmit = (data) => console.log(data);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <fieldset>
          <legend>Sign up</legend>
          <form
            className={classes.signUpForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("userName", { required: true })}
              placeholder="Full name"
              type="text"
            />

            <input
              className={userName && classes.error}
              {...register("userName", { required: true })}
              placeholder="*Username"
              type="text"
            />

            {email && (
              <span className={`${email && classes.error} ${classes.span}`}>
                {errorMsg}
              </span>
            )}
            <input
              className={email && classes.error}
              {...register("email", { required: true })}
              placeholder="*Your email"
              type="email"
            />

            {email && (
              <span className={`${email && classes.error} ${classes.span}`}>
                {errorMsg}
              </span>
            )}
            <input
              className={password && classes.error}
              {...register("password", { required: true })}
              placeholder="*Your password"
              type="password"
            />
            {password && (
              <span className={`${password && classes.error} ${classes.span}`}>
                {errorMsg}
              </span>
            )}

            <input type="submit" value="Sign up" />
            <p className={classes.loginText}>
              Already have an account? <Link to="/login">Login</Link>.
            </p>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

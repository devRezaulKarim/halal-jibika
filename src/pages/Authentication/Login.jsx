import { Link } from "react-router-dom";
import classes from "../../Styles/Login.module.css";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: {
      errors: { email, password },
    },
  } = useForm();

  const errorMsg = "*This field is required";

  const onSubmit = (data) => console.log(data);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <fieldset>
          <legend>Login</legend>
          <form className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={email && classes.error}
              {...register("email", { required: true })}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              type="password"
            />
            {password && (
              <span className={`${password && classes.error} ${classes.span}`}>
                {errorMsg}
              </span>
            )}

            <input type="submit" value="Login" />

            <p className={classes.signUpText}>
              New here? <Link to="/registration">Sign up</Link> with email.
            </p>

            <div className={classes.socialBtns}>
              <div className={classes.googleBtn}>
                <img
                  width={"36px"}
                  height={"36px"}
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-vector-graphic-pixabay-15.png"
                  alt=""
                />
                <button>Continue with google</button>
              </div>
              <div className={classes.githubBtn}>
                <img
                  width={"42px"}
                  height={"36px"}
                  src="https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-github-logo-24.png"
                  alt=""
                />
                <button>Continue with github</button>
              </div>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

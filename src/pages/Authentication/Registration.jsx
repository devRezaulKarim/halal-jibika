import { Link, useNavigate } from "react-router-dom";
import classes from "../../Styles/Registration.module.css";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { toast } from "react-toastify";
import Spinner from "../../Utls/Spinner";

export default function Registration() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, password, confirmPass },
    },
  } = useForm();

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    console.log();
    toast.error(
      error.message.includes("already-in-use")
        ? "The mail already in use. Please try another mail."
        : "Something went wrong!!",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "customId",
      }
    );
  }
  const errorMsg = "*This field is required";

  const onSubmit = (data) => {
    const fullName = data.fullName;
    const email = data.email;
    const password = data.password;
    const confirmPass = data.confirmPass;

    if (password === confirmPass) {
      createUserWithEmailAndPassword(email, confirmPass).then((r) => {
        if (r._tokenResponse.idToken) navigate("/");
      });
    } else {
      toast.error("Please check your password!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "customId",
      });
    }
  };

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
              {...register("fullName", { required: true })}
              placeholder="Full name"
              type="text"
            />

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

            <input
              className={confirmPass && classes.error}
              {...register("confirmPass", { required: true })}
              placeholder="*Confirm Password"
              type="password"
            />
            {confirmPass && (
              <span
                className={`${confirmPass && classes.error} ${classes.span}`}
              >
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

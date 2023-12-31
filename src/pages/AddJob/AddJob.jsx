import { useForm } from "react-hook-form";
import classes from "../../Styles/AddJob.module.css";
import Input from "../../Components/Input";

export default function AddJob() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // You can handle the form data as needed, such as sending it to an API
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <fieldset>
          <legend>Add a new job</legend>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} type="text" name="title">
              Title
            </Input>
            <Input register={register} type="text" name="imgUrl">
              Image URL
            </Input>
            <Input register={register} type="text" name="companyName">
              Company Name
            </Input>
            <Input register={register} type="text" name="position">
              Position
            </Input>
            <div className={classes.textArea}>
              <label htmlFor="description">Description:</label>
              <textarea
                placeholder="Description"
                id="description"
                {...register("description", { required: "This is required" })}
              />
            </div>
            {errors ? <p>dfgsfgfdg</p> : ""}
            <input type="submit" value={"Submit"} />
          </form>
        </fieldset>
      </div>
    </div>
  );
}

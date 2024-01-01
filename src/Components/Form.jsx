/* eslint-disable react/prop-types */
import Input from "./Input";
import classes from "../Styles/Form.module.css";

export default function Form({ handleSubmit, onSubmit, register }) {
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        type="text"
        name="title"
        value={register.title}
      >
        Title
      </Input>
      <Input register={register} type="text" name="logo">
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
      <input type="submit" value={"Submit"} />
    </form>
  );
}

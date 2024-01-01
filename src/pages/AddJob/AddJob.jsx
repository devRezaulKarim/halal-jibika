/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import classes from "../../Styles/AddJob.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import Form from "../../Components/Form";

export default function AddJob() {
  const { register, reset, handleSubmit, errors } = useForm({
    defaultValues: {
      title: "",
      logo: "",
      companyName: "",
      position: "",
    },
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:9000/jobs", data)

      .then(function (response) {
        toast.success(`Job added successfully`);
        // reset();
      })
      .catch(function (error) {
        toast.error(`Something went wrong!`);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <fieldset>
          <legend>Add a new job</legend>
          <Form
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            register={register}
          />
        </fieldset>
      </div>
    </div>
  );
}

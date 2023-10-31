import React from "react";
import { useForm, Controller } from "react-hook-form";

const MyForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={() => handleSubmit(onSubmit)()}>
      <div>
        <label>Name</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;

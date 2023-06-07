import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { newPasswordSchema } from "@/schema/newPassword";




const Password = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
     
      },
      onSubmit,
      validationSchema: newPasswordSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your confirmPassword ",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
   
  ];
  return (
    <form className="lg:p-8 lg:mt-0 mt-5 flex-1" onSubmit={handleSubmit}>
      <Title addClass="text-[40px]">Password</Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key= {input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <button className="btn-primary mt-4" type="submit">Update</button>
    </form>
  );
};

export default Password;

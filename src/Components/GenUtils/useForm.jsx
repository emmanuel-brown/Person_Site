import { useState } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    e => {
      e.preventDefault();
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }
  ];
};
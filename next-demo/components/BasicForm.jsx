import React from "react";
import FormControl from "@mui/material/FormControl";
import TextFieldInput from "./TextFieldInput";

export const FormInput = (props) => {
  const { onChange, book} = props;
  return (
    <FormControl>
      <TextFieldInput
        label="Book title"
        placeholder="Enter book title"
        name="title"
        type="text"
        onChange={onChange}
      />
    </FormControl>
  );
};

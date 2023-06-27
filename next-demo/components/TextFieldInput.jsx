import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const TextFieldInput = (props) => {
  const { label, placeholder, name, type, onChange,book } = props;
  const [ title, setTitle ]= useState('d')
  const onChangeInput = (e) => {
    setTitle(e.target.value)
    onChange(e);
  };
  return (
    <div>
      <TextField
        error={!title}
        id="outlined-basic"
        label={label}
        placeholder={placeholder}
        name={name}
        type={type}
        fullWidth
        onChange={onChangeInput}
        helperText={title ?'':"Title is required"}
      />
    </div>
  );
};

export default TextFieldInput;

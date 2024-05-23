import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from "uuid";

const Adduser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(addUser({
        id: uuidv4(), 
        name: values.name,
        email: values.email

    }))
    navigate("/")
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "Text", placeholder: "John Wick" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "JohnWick@gmail.com" }}
      />
      <Button onClick={handleAddUser}>Sumit</Button>
    </div>
  );
};

export default Adduser;

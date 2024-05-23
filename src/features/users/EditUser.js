import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";
import { editUser } from "./userSlice";

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users)
    const navigate = useNavigate();
    const existingUser = users.filter(user=> user.id === params.id);
    const { name, email } = existingUser[0]
    const [values, setValues] = useState({
        name,
        email
      });
    
      const handleEdit = () => {
        setValues({ name: "", email: "" });
        dispatch(editUser({
            id: params.id,
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
    <Button onClick={handleEdit}>Sumit</Button>
  </div>
  )
}

export default EditUser
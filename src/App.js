import React from "react";
import UserList from "./features/users/UserList";
import { Route, Routes } from "react-router-dom";
import Adduser from "./features/users/Adduser";
import EditUser from "./features/users/EditUser";

const App = () => {
  return (
    <div>
     
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700">
          CRUD with Redux toolkit
        </h1>
        <Routes>
          <Route path="/" element={<UserList/>} />
          <Route path="/add-user" element={<Adduser/>} />
          <Route path="/edit-user/:id" element={<EditUser/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;

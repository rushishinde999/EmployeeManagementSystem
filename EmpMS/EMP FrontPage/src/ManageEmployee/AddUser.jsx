import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [emp, setEmp] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = emp;

  const inputChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const dataSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9999/add", emp);
      alert("Data inserted successfully");
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={dataSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Employee Management System
        </h2>
        <input
          onChange={inputChange}
          type="text"
          placeholder="Enter the name"
          value={name}
          name="name"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          onChange={inputChange}
          type="text"
          placeholder="Enter the Username"
          value={username}
          name="username"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          onChange={inputChange}
          type="email"
          placeholder="Enter the Email"
          value={email}
          name="email"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Employee
        </button>
        <Link to={"/"} className="w-full block text-center mt-2">
          <button className="w-full p-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AddUser;

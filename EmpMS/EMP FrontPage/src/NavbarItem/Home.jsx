import React from "react";
import home from "../assets/Home.jpg";
import { Link } from "react-router-dom";
import HomeEmp from "../ManageEmployee/HomeEmp";

const Contact = () => {
  return (
    <div className="fullbody h-screen bg-gradient-to-r from-violet-200 to-pink-200 flex flex-col justify-center items-center">
      <div className="image mb-8">
        <img src={home} alt="Welcome" className="h-72  rounded-2xl shadow-lg" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Employee Management System
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage your employees efficiently with our easy-to-use system. Add,
          edit, and view employee details with just a few clicks!
        </p>
        <Link
          to={"/HomeEmp"}
          className="bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-6 rounded "
        >
          Manage Employees
        </Link>
      </div>
    </div>
  );
};

export default Contact;

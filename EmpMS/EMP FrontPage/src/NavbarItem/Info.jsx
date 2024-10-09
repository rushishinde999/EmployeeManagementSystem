import React from "react";

const Info = () => {
  return (
    <div className="fullbody h-screen bg-gradient-to-r from-slate-300 to-slate-500 p-8">
      <h1 className="text-3xl font-bold mb-4">Project Overview</h1>
      <p className="mb-6">
        Welcome to the Employee Management System (EMS). This project allows
        administrators to manage employee records with ease. You can perform
        actions such as adding, updating, deleting, and viewing employee data
        through an intuitive user interface.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>CRUD Operations: Add, view, update, and delete employees.</li>
        <li>User-friendly Interface: Easy to navigate and manage records.</li>
        <li>Responsive Design: Works seamlessly across devices.</li>
      </ul>
      <p>
        This system enhances productivity by simplifying employee management,
        providing a streamlined way to maintain employee information.
      </p>
    </div>
  );
};

export default Info;

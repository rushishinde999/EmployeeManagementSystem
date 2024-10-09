import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeEmp = () => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const result = await axios.get("http://localhost:9999/display");
    setEmp(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:9999/${id}`);
    loaduser();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="nav flex flex-row justify-between  ">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Employee Management
        </h2>

        <Link
          to={"/AddUser"}
          className="  bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Add Employee
        </Link>
      </div>

      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-300 text-gray-800 uppercase text-sm leading-normal">
            <th className="py-3 px-4 text-center">ID</th>
            <th className="py-3 px-4 text-center">Name</th>
            <th className="py-3 px-4 text-center">Username</th>
            <th className="py-3 px-4 text-center">Email</th>
            <th className="py-3 px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {emp.map((employee) => (
            <tr
              key={employee.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-4 text-center">{employee.id}</td>
              <td className="py-3 px-4 text-center">{employee.name}</td>
              <td className="py-3 px-4 text-center">{employee.username}</td>
              <td className="py-3 px-4 text-center">{employee.email}</td>
              <td className="py-3 px-4 text-center flex justify-center space-x-2">
                <Link
                  to={`/EditUser/${employee.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded transition duration-300 ease-in-out"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(employee.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeEmp;

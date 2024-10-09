import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ name: "", username: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:9999/${id}`);
      setUser(result.data);
    } catch (error) {
      setError("Error loading user data");
      console.error("Error loading user data", error);
    } finally {
      setLoading(false);
    }
  };

  const inputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!user.name || !user.username || !user.email) {
      alert("All fields are required!");
      return;
    }
    try {
      await axios.put(`http://localhost:9999/${id}`, user);
      alert("Updated Successfully");
    } catch (error) {
      setError("Something went wrong during the update");
      console.error("Something went wrong", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Edit Employee Data
      </h2>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            onChange={inputChange}
            type="text"
            name="name"
            value={user.name}
            placeholder="Enter The Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            onChange={inputChange}
            type="text"
            name="username"
            value={user.username}
            placeholder="Enter The Username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={inputChange}
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter The Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Update Employee
          </button>
          <Link
            to={"/"}
            className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800"
          >
            CANCEL
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditUser;

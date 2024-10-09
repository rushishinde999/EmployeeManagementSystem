import React from "react";

const Service = () => {
  return (
    <div className="fullbody h-screen bg-gradient-to-r from-purple-200 to-indigo-200 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 mb-6">
          We offer employee management solutions including onboarding,
          performance tracking, payroll integration, and more to meet all your
          business needs.
        </p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded">
          Explore Services
        </button>
      </div>
    </div>
  );
};

export default Service;

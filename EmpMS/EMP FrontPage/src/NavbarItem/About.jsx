import React from "react";

const About = () => {
  return (
    <div className="fullbody h-screen bg-gradient-to-r from-yellow-200 to-orange-200 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are dedicated to providing the best management solutions for your
          business. Our team is committed to building efficient, user-friendly
          software.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded">
          Meet the Team
        </button>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import home from "../assets/Home.jpg"; // Replace this with the correct path to your image

const Contact = () => {
  return (
    <div className="fullbody h-screen bg-gradient-to-r from-violet-200 to-pink-200 p-8 flex flex-col items-center">
      <div className="image mb-8">
        <img src={home} alt="Home" className="h-48 w-48 rounded-full" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg mb-6 text-center">
        Hello! I’m Rushikesh Ramchandra Shinde, a Full Stack Java Developer from
        Pimpri-Chinchwad, India. I specialize in creating dynamic and
        user-friendly web applications with Java, Spring Boot, React, and more.
        Feel free to contact me if you have any questions or collaboration
        inquiries.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <p>Email: your-email@example.com</p>
      <p>Phone: +91 1234567890</p>
      <p className="mt-4">
        You can also find more information about my work and projects on my
        portfolio site.
      </p>
    </div>
  );
};

export default Contact;

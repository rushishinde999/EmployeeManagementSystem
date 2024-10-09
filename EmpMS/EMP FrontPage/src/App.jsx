import React from "react";
import Navbar from "./Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./NavbarItem/Home";
import Info from "./NavbarItem/Info";
import Service from "./NavbarItem/Service";
import Contact from "./NavbarItem/Contact";
import About from "./NavbarItem/About";
import HomeEmp from "./ManageEmployee/HomeEmp";
import AddUser from "./ManageEmployee/AddUser";
import EditUser from "./ManageEmployee/EditUser";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <>
            <Navbar />
            <Home />
          </>
        </>
      ),
    },
    {
      path: "/Info",
      element: (
        <>
          <Navbar />
          <Info />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar /> <About />{" "}
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar /> <Contact />{" "}
        </>
      ),
    },
    {
      path: "/Service",
      element: (
        <>
          <Navbar /> <Service />{" "}
        </>
      ),
    },
    {
      path: "/HomeEmp",
      element: (
        <>
          {" "}
          <Home />
          <HomeEmp />
        </>
      ),
    },
    {
      path: "/AddUser",
      element: (
        <>
          <HomeEmp />
          <AddUser />
        </>
      ),
    },
    {
      path: "/EditUser/:id",
      element: (
        <>
          <HomeEmp /> <EditUser />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

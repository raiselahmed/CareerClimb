import React from "react";

import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import Home from "../Pages/Home/Home";
import JobDetail from "../Pages/JobDetail/JobDetail";
import PrivetRouter from "./PrivetRouter";
import MyApplication from "../Pages/MyApplication/MyApplication";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <ErrorPage></ErrorPage>,
    // errorElement: <h1>Route not Fount</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/jobs/:id',
        element: <PrivetRouter> <JobDetail></JobDetail></PrivetRouter>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: '/myApplication',
        element: <PrivetRouter><MyApplication></MyApplication></PrivetRouter>
      }
      ,
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      }
    ],
  },
]);

export default Router;

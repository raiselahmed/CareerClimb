import React from "react";

// import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";

import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import Home from "../Pages/Home/Home";
import JobDetail from "../Pages/JobDetail/JobDetail";
import PrivetRouter from "./PrivetRouter";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/AddJob.ksx/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViweApplication from "../Pages/ViweAppliaction/ViweApplication";
import AllJobs from "../Pages/AllJobs/AllJobs";

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
        path: '/allJobs',
        element: <PrivetRouter><AllJobs></AllJobs></PrivetRouter>,
        loader: ()=> fetch('http://localhost:5000/jobs')
      },
      {
        path: '/myApplication',
        element: <PrivetRouter><MyApplication></MyApplication></PrivetRouter>
      },
      {
        path: '/job-post',
        element: <PrivetRouter><AddJob></AddJob></PrivetRouter>
      },
      {
        path: '/viweApplication/:job_id',
        element: <PrivetRouter><ViweApplication></ViweApplication></PrivetRouter>,
       loader: ({ params }) => fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)
      },
       {
        path: '/my-posted-job',
        element: <PrivetRouter><MyPostedJobs></MyPostedJobs></PrivetRouter>
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

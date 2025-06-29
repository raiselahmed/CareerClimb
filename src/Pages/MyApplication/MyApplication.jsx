import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";

import useAxiosSecure from "../../MyHooks/useAxiosSecure";

const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJob] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    // fetch(`http://localhost:5000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJob(data);
    //   });

    // axios.get(`http://localhost:5000/job-application?email=${user.email}`, { withCredentials: true })
    // .then(res => {
    //   setJob(res.data); // This line will update your jobs state

    // })

    axiosSecure
      .get(`/job-application?email=${user.email}`)
      .then((res) => setJob(res.data || [])) // Fallback to an empty array if data is undefined or null
      .catch((error) => {
        console.error("Error fetching job applications:", error);
        setJob([]); // Clear jobs on error
      });
  }, [user.email, axiosSecure]);

  return (
    <div>
      <h1>job {jobs.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt={`${job.title} company logo`} // More descriptive alt text
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.category}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.jobType}
                  </span>
                </td>

                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyApplication;

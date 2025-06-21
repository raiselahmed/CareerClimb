import React from "react";
import { useLoaderData } from "react-router";

const ViweApplication = () => {
  const applications = useLoaderData();
  console.log(applications);
  return (
    <div>
      <h2>Applicataion for this job {applications.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              applications.map((appl, idx)=> <tr>
              <th key={idx}>{idx + 1}</th>
              <td>{appl.name}</td>
              <td>{appl.applicant_email}</td>
              <td>Blue</td>
            </tr>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViweApplication;

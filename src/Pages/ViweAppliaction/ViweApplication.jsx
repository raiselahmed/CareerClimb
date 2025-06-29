import React from "react";
import { useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const ViweApplication = () => {
  const applications = useLoaderData();
  console.log(applications);
    

  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };

    fetch(`http://localhost:5000/job-application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Application status updated successfully!")
        }
      });


      
  };

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
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((appl, idx) => (
              <tr>
                <th key={idx}>{idx + 1}</th>
                <td>{appl.name}</td>
                <td>{appl.applicant_email}</td>
                <td>
                  <select
                    onChange={(e,) => handleStatusUpdate(e, appl._id)}
                    defaultValue={appl.status || "Change Status"}
                    className="select  select-neutral"
                  >
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false} // Typically true for close-on-click
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ViweApplication;

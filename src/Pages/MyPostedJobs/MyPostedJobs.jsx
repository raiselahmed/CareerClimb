import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Link } from 'react-router';

const MyPostedJobs = () => {
    const {user} = useContext(AuthContext)
    const [jobs, setJobs] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setJobs(data)

        })
    },[user.email])
    console.log(jobs);
    return (
        <div>
            <h1>HE {jobs.length}</h1>

              <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th>Name</th>
              <th>Job</th>
              <th>ii</th>
              <th>Application</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            jobs.map(job =>  <tr key={job._id}>
             
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={job.company_logo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{job.jb_title}</div>
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
              <td>{job.applicationCount}</td>
              <th>
                <Link to={`/viweApplication/${job._id}`}>  
                  <button className="btn btn-ghost btn-xs">Viwe Application</button>
                </Link>
              </th>
            </tr>)
           }
          </tbody>
          {/* foot */}
       
        </table>
        </div>
    );
};

export default MyPostedJobs;
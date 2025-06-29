import React, { useState } from "react";
import useJobs from "../../MyHooks/useJobs";
import HotJobsCard from "../Home/HotJobsCard";
// import { useLoaderData } from 'react-router';

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  
  const { jobs, loading } = useJobs(sort, search);

  console.log(sort);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  // const jobs = useLoaderData()
  return (
    <div className="my-12">
      {/* what i do this  */}

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center">Find All Jobs</h1>
        <p className="text-center text-gray-500 text-sm mt-2">
          Explore thousands of job opportunities and find the perfect role for
          you.
        </p>

        <div className="flex justify-center self-center mt-4">
          <input
            onKeyUp={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search jobs..."
            className="border p-2 rounded-l w-full max-w-md"
          />

        {/* renge */}

    

          <div className=" ms-4">
            <button
              onClick={() => setSort(!sort)}
              className={`btn btn-primary ${
                sort && "btn-success"
              } px-6 py-3 rounded-lg text-white font-semibold`}
            >
              {sort === true ? "Sorted by Sallary" : "Sort by Sallary"}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job}></HotJobsCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;

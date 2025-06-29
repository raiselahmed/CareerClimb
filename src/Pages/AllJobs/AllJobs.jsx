import React, { useState } from "react";
import useJobs from "../../MyHooks/useJobs";
import HotJobsCard from "../Home/HotJobsCard";
// import { useLoaderData } from 'react-router';
import Slider from "@mui/material/Slider";
import PriceRnge from "../../Components/PriceRneg";
// import PriceRnge from '../../Components/PriceRneg';

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSallary, setMinSallary] = useState('')
  const [maxSallary, setMaxSallary] = useState('')
  const { jobs, loading } = useJobs(sort, search, minSallary, maxSallary);

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

        <div className="flex flex-col lg:flex-row justify-center items-center mt-4 p-4">
          <input
            onKeyUp={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search jobs..."
            className="border p-2 rounded-lg w-full max-w-md mb-4 md:mb-0 md:mr-4"
          />
        </div>

        <div className="flex justify-center md:justify-start">
          <div className="">
            <button
              onClick={() => setSort(!sort)}
              className={`btn btn-primary  ${
                sort && "btn-success"
              } px-6 py-3 rounded-lg text-white font-semibold w-full`}
            >
              {sort === true ? "Sorted by Salary" : "Sort by Salary"}
            </button>

            <section className="w-full max-w-md mt-3">
           <input   onKeyUp={(e) => setMinSallary(e.target.value)} type="number" placeholder="MinSallary" className="input" />
           
            </section>
             <section className="w-full max-w-md mt-3">
           <input   onKeyUp={(e) => setMaxSallary(e.target.value)} type="number" placeholder="MaxSallary" className="input" />
           
            </section>
            
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
